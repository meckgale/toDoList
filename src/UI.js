import { tasks, deleteTask, updateTaskStatus, deleteTaskStorage } from "./toDoList"
import { format, toDate, parseISO } from "date-fns"

const content = document.querySelector('#content')

export function initUI() {
  // Initialize the UI, render tasks, and add event listeners
  renderTasks()
  
  const taskList = document.getElementById('taskList')

  // Event delegation: Add a single click event listener to the task list
  taskList.addEventListener('click', handleTaskClick)
}

export function renderTasks() {
  const taskList = document.getElementById('taskList')
  taskList.innerHTML = '' // Clear the existing task list

  for (const task of tasks) {
      const listItem = document.createElement('li')
      listItem.dataset.id = task.id // Set a custom data attribute for the task ID
      const formattedDueDate = task.dueDate ? format(new Date(parseISO(task.dueDate)), "eee do MMM yy") : new Date();
      listItem.innerHTML = `
          <input type="checkbox" id="taskCheckbox-${task.id}" name="taskCheckbox" ${task.completed ? 'checked' : ''}>
          <span>${task.title} (Due: ${formattedDueDate})</span>
          <button id="deleteTaskBtn-${task.id}" name="deleteTaskBtn">Delete</button>
          `

      taskList.appendChild(listItem)
  }
}

function handleTaskClick(event) {
  const target = event.target

  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
      // Checkbox was clicked, handle task completion
      const taskId = parseInt(target.parentElement.dataset.id)
      const completed = target.checked
      updateTaskStatus(taskId, completed)
  } else if (target.tagName === 'BUTTON') {
      // Delete button was clicked, handle task deletion
      const taskId = parseInt(target.parentElement.dataset.id)
      deleteTask(taskId)
  }
}
