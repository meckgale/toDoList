import { renderTasks } from "./UI";

let taskIdCounter = 1;

// ID generator function
function generateTaskId() {
    return taskIdCounter++;
}

export function Task(title, dueDate = null, completed = false) {
    this.id = generateTaskId();
    this.title = title;
    this.dueDate = dueDate;
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

    // Render initial tasks
    renderTasks();
}

function handleAddTask() {
    const taskInput = document.getElementById('taskInput');
    const title = taskInput.value.trim();

    if (title === '') {
        return; // Don't add empty tasks
    }

    const dueDateInput = prompt('Enter the due date (YYYY/MM/DD):');
    const dueDate = dueDateInput ? dueDateInput : null;


    const newTask = new Task(title, dueDate);
    tasks.push(newTask);
    saveTasksToStorage();
    
    // Clear input and provide feedback
    taskInput.value = '';
    alert('Task added successfully!');

    renderTasks();
}

export function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasksToStorage();
    renderTasks();
}

export function updateTaskStatus(taskId, completed) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = completed;
        saveTasksToStorage();
    }
}

function saveTasksToStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
