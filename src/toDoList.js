import { renderTasks } from "./UI";
import { isValid, parseISO, parse, format } from 'date-fns';
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

    //Delete tasks storage
    const deleteStorageButton = document.getElementById('deleteStorage')
    deleteStorageButton.addEventListener('click', deleteTaskStorage)

    // Render initial tasks
    renderTasks();
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

    const taskPriority = document.getElementById('taskPriority')
    const priority = taskPriority.value

    const newTask = new Task(title, description, dueDate, priority);
    tasks.push(newTask);
    saveTasksToStorage();
    
    // Clear input and provide feedback
    taskTitle.value = '';
    taskDescription.value = '';
    dueDateInput.value = formatDate();
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

export function saveTasksToStorage() {
    localStorage.setItem('tasks', [JSON.stringify(tasks)]);
}

export function deleteTaskStorage() {
    localStorage.clear()
}

