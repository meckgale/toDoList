import { tasks, deleteTask, updateTaskStatus } from "./toDoList"

export function initUI() {
  // Initialize the UI, render tasks, and add event listeners
  renderTasks(tasks)
  
  const taskList = document.getElementById('taskList')

  // Event delegation: Add a single click event listener to the task list
  taskList.addEventListener('click', handleTaskClick)

}

export function renderTasks(tasks) {
  const taskList = document.getElementById('taskList')
  taskList.innerHTML = '' // Clear the existing task list

  for (const task of tasks) {
      const listItem = document.createElement('div')
      listItem.classList.add('listItem')
      listItem.dataset.id = task.id // Set a custom data attribute for the task ID
      listItem.innerHTML = `
      <div class="taskContainer">
        <div class="topContainer">
          <div class="topLeft">
            <input type="checkbox" id="taskCheckbox-${task.id}" name="taskCheckbox" ${task.completed ? 'checked' : ''}>
            <div class="taskTitle">${task.title}</div>
          </div>
          <div class="topRight">
            <div>Due: ${task.dueDate}</div>
            <div>Priority: ${task.priority}</div>
            <button id="deleteTaskBtn-${task.id}" name="deleteTaskBtn">Delete</button>
          </div>
        </div>
        <div class="bottomContainer">
          <div>${task.description}</div>
        </div>
      </div>`

      taskList.appendChild(listItem)
  }
}

function handleTaskClick(event) {
  const target = event.target
  console.log(target)

  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
      // Checkbox was clicked, handle task completion
      const taskId = parseInt(target.closest('div[data-id]').dataset.id)
      const completed = target.checked
      updateTaskStatus(taskId, completed)
      console.log(tasks)
  } else if (target.tagName === 'BUTTON') {
      // Delete button was clicked, handle task deletion
      const taskId = parseInt(target.closest('div[data-id]').dataset.id)
      deleteTask(taskId)
  }
}

