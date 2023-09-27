import { capitalize } from "lodash";

let taskIdCounter = 1;

// ID generator function
export function generateTaskId() {
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

export function generateEditIDs(element) {
    // Get all child elements of the provided element
    const children = element.querySelectorAll('*');
  
    // Iterate through each child element
    children.forEach(child => {
      // Check if the child has an ID attribute
      if (child.id) {
        //Capitilize first letter of given ID
        const capValueID = `${child.id}`.charAt(0).toUpperCase() + `${child.id}`.slice(1)
        // Generate a new ID by adding "edit" to the beginning
        const newID = 'edit' + capValueID;
        
        // Set the new ID for the child element
        child.id = newID;
      }
      // Check if the child is a <label> element
      else if (child.tagName.toLowerCase() === 'label') {
        // Update the 'for' attribute of the label to match the new ID
        const htmlFor = child.getAttribute('for');
        if (htmlFor) {
          //Capitilize first letter of given ID
          const capValueFor = `${htmlFor}`.charAt(0).toUpperCase() + `${htmlFor}`.slice(1)
          const newHtmlFor = 'edit' + capValueFor;
          child.setAttribute('for', newHtmlFor);
        }
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

