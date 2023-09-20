import { format } from "date-fns"
import { formatDate } from "./currentDate"

export function initDOM() {
    // Create a container div for the to-do app
const todoAppContainer = document.createElement('div')
todoAppContainer.id = 'todoAppContainer'

// Create a heading for the app
const heading = document.createElement('h1')
heading.textContent = 'To-Do App'

// Create an input field for adding tasks
const taskTitle = document.createElement('input')
taskTitle.id = 'taskTitle' 
taskTitle.type = 'text'
taskTitle.placeholder = 'Title'

// Create an decription field for tasks details
const taskDescription = document.createElement('input')
taskDescription.id = 'taskDescription'
taskDescription.type = 'text'
taskDescription.placeholder = 'Description'

// Create an dueDate for tasks deadline
const taskDueDate = document.createElement('input')
taskDueDate.id = 'taskDueDate'
taskDueDate.type = 'date'
taskDueDate.value = formatDate()

//Create priority for tasks importance
const taskPriority = document.createElement('select')
const priorities = ["High", "Medium", "Low"];
// Loop through the priorities and create an option element for each
priorities.forEach((priority) => {
    const option = document.createElement("option");
    option.value = priority; // Set the value attribute to the priority value
    option.textContent = priority; // Set the text content of the option
    if (priority === "Medium") {
        option.selected = true; // Set 'Medium' as the default selected option
    }
    taskPriority.appendChild(option); // Append the option to the select element
  });

// Create a button to add tasks
const addTaskBtn = document.createElement('button')
addTaskBtn.id = 'addTaskBtn'
addTaskBtn.textContent = 'Add Task'

//Create a button to delete task storage
const deleteStorageBtn = document.createElement('button')
deleteStorageBtn.id = 'deleteStorage'
deleteStorageBtn.textContent = 'Clear Tasks'

// Create an empty div element to hold the task list
const taskList = document.createElement('div')
taskList.id ='taskList'

// Append the heading, input field, button, and task list to the container
todoAppContainer.appendChild(heading)
todoAppContainer.appendChild(taskTitle)
todoAppContainer.appendChild(taskDescription)
todoAppContainer.appendChild(taskDueDate)
todoAppContainer.appendChild(taskPriority)
todoAppContainer.appendChild(addTaskBtn)
todoAppContainer.appendChild(taskList)
todoAppContainer.appendChild(deleteStorageBtn)

// Append the container to the document body
document.body.appendChild(todoAppContainer)
}

