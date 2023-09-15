export function initDOM() {
    // Create a container div for the to-do app
const todoAppContainer = document.createElement('div')
todoAppContainer.id = 'todoAppContainer'

// Create a heading for the app
const heading = document.createElement('h1')
heading.textContent = 'To-Do App'

// Create an input field for adding tasks
const taskInput = document.createElement('input')
taskInput.id = 'taskInput' 
taskInput.type = 'text'
taskInput.placeholder = 'Add a new task...'

// Create a button to add tasks
const addTaskBtn = document.createElement('button')
addTaskBtn.id = 'addTaskBtn'
addTaskBtn.textContent = 'Add Task'

//Create a button to delete task storage
const deleteStorageBtn = document.createElement('button')
deleteStorageBtn.id = 'deleteStorage'
deleteStorageBtn.textContent = 'Clear Tasks'

// Create an empty ul element to hold the task list
const taskList = document.createElement('ul')
taskList.id ='taskList'

// Append the heading, input field, button, and task list to the container
todoAppContainer.appendChild(heading)
todoAppContainer.appendChild(taskInput)
todoAppContainer.appendChild(addTaskBtn)
todoAppContainer.appendChild(taskList)
todoAppContainer.appendChild(deleteStorageBtn)

// Append the container to the document body
document.body.appendChild(todoAppContainer)
}

