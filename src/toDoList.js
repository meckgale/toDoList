import { renderTasks } from "./UI";
import { formatDate } from "./currentDate";

let taskIdCounter = 1;

// ID generator function
function generateTaskId() {
    return taskIdCounter++;
}

export function Task(title, description, dueDate = null, priority, completed = false) {
    this.id = generateTaskId();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
}

export let tasks = []; // Array to store tasks

export function initTodoApp() {
    // Initialize tasks from storage or create an empty array
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = storedTasks;
    taskIdCounter = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

    // Add event listener for adding tasks
    const addTaskBtn = document.getElementById('addTaskBtn');
    addTaskBtn.addEventListener('click', handleAddTask);

    //Add event listener for sorting task list
    const selectElement = document.getElementById("sort");
    selectElement.addEventListener("change", () => {
        const selectedCriteria = selectElement.value;
        sortTasks(selectedCriteria);
    });

    //Add event listener for filter task list
    const filterSelect = document.getElementById('taskFilter')
    filterSelect.addEventListener('change', handleFilterChange)

    //Delete tasks storage
    const deleteStorageButton = document.getElementById('deleteStorage')
    deleteStorageButton.addEventListener('click', deleteTaskStorage)

    // Render initial tasks
    renderTasks(tasks);
}

function handleAddTask() {
    const taskTitle = document.getElementById('taskTitle');
    const title = taskTitle.value.trim();

    if (title === '') {
        alert('Add title for task!');
        return; // Don't add empty tasks
    }

    const taskDescription = document.getElementById('taskDescription')
    const description = taskDescription.value

    if (description === '') {
        alert('Add description for task!');
        return; // Don't add empty tasks
    }

    const dueDateInput = document.getElementById('taskDueDate')
    const dueDate = dueDateInput.value

    const priorityOption = document.querySelector('select')
    const priority = priorityOption.value

    const newTask = new Task(title, description, dueDate, priority);
    tasks.push(newTask);
    saveTasksToStorage();
    
    // Clear input and provide feedback
    taskTitle.value = '';
    taskDescription.value = '';
    dueDateInput.value = formatDate();
    priorityOption.value = "Medium";
    alert('Task added successfully!');

    renderTasks(tasks);
}

function sortTasks(selectedCriteria) {
    tasks.sort((taskA, taskB) => {
        if (selectedCriteria === "Due Date") {
            // Sort by due date
            return new Date(taskA.dueDate) - new Date(taskB.dueDate);
        } else if (selectedCriteria === "Priority") {
            // Sort by priority (assuming priority is a string like "High", "Medium", "Low")
            const priorities = ["High", "Medium", "Low"];
            return priorities.indexOf(taskA.priority) - priorities.indexOf(taskB.priority);
        }
    });

    renderTasks(tasks);
}

function handleFilterChange(event) {
    const selectedFilter = event.target.value; // Get the selected filter value
  
    // Filter the tasks based on the selected option
    let filteredTasks = [];
  
    if (selectedFilter === 'completed') {
      filteredTasks = tasks.filter(task => task.completed);
    } else if (selectedFilter === 'active') {
      filteredTasks = tasks.filter(task => !task.completed);
    } else {
      // If "All Tasks" is selected or no filter is selected, show all tasks
      filteredTasks = tasks;
    }
  
    // Render the filtered tasks
    renderTasks(filteredTasks);
  }
  

export function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasksToStorage();
    renderTasks(tasks);
}

export function updateTaskStatus(taskId, completed) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = completed;
        saveTasksToStorage();
    }
}

export function saveTasksToStorage() {
    localStorage.setItem('tasks', [JSON.stringify(tasks)]);
}

export function deleteTaskStorage() {
    tasks = [];
    localStorage.setItem('tasks', [JSON.stringify(tasks)]);
    renderTasks(tasks);
}

