let taskIdCounter = 1;

// ID generator function
function generateTaskId() {
    return taskIdCounter++;
}

let appliedFilter;
let appliedSort;

export function Task(title, description, dueDate = null, priority, completed = false) {
    this.id = generateTaskId();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
}

export let tasks = []; // Array to store tasks
export let uiTasks = [] //Array to render tasks

export function initTodoApp() {
    // Initialize tasks from storage or create an empty array
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = storedTasks;
    generateUITasks();
    taskIdCounter = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
}
export function addTask(title, description, dueDate, priority) {
    const newTask = new Task(title, description, dueDate, priority);
    tasks.push(newTask);
    saveTasksToStorage();
    generateUITasks()
}

function generateUITasks() {
    if (appliedFilter === 'completed') {
        uiTasks = tasks.filter(task => task.completed);
      } else if (appliedFilter === 'active') {
          uiTasks = tasks.filter(task => !task.completed);
      } else {
        // If "All Tasks" is selected or no filter is selected, show all tasks
        uiTasks = tasks;
      }

      uiTasks.sort((taskA, taskB) => {
        if (appliedSort === "Due Date") {
            // Sort by due date
            return new Date(taskA.dueDate) - new Date(taskB.dueDate);
        } else if (appliedSort === "Priority") {
            // Sort by priority (assuming priority is a string like "High", "Medium", "Low")
            const priorities = ["High", "Medium", "Low"];
            return priorities.indexOf(taskA.priority) - priorities.indexOf(taskB.priority);
        }
    });
}

export function sortTasks(selectedCriteria) {
    appliedSort = selectedCriteria;
    generateUITasks()
}

export function filterTasks(selectedFilter) {
    appliedFilter = selectedFilter;
    generateUITasks()
  }
  
export function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasksToStorage();
    generateUITasks()
}

export function updateTaskStatus(taskId, completed) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = completed;
        saveTasksToStorage();
        generateUITasks()
    }
}

export function saveTasksToStorage() {
    localStorage.setItem('tasks', [JSON.stringify(tasks)]);
}

export function deleteTaskStorage() {
    tasks = [];
    uiTasks = [];
    localStorage.setItem('tasks', [JSON.stringify(tasks)]);
}

