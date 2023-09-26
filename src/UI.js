import { uiTasks, deleteTask, updateTaskStatus, addTask, sortTasks, filterTasks } from "./toDoList"
import { formatDate } from "./currentDate";

export function initUI() {
  // Initialize the UI, render tasks, and add event listeners
  
  const taskList = document.getElementById('taskList')

  // Event delegation: Add a single click event listener to the task list
  taskList.addEventListener('click', handleTaskClick)

  // Add event listener for adding tasks
  const addTaskBtn = document.getElementById('addTaskBtn');
  addTaskBtn.addEventListener('click', handleAddTask);

  //Add event listener for sorting task list
  const selectElement = document.getElementById("sort");
  selectElement.addEventListener("change", () => {
      const selectedCriteria = selectElement.value;
      sortTasks(selectedCriteria);
      renderTasks()
  });

  //Add event listener for filter task list
  const filterSelect = document.getElementById('taskFilter')
  filterSelect.addEventListener("change", () => {
    const selectedFilter = filterSelect.value;
    filterTasks(selectedFilter);
    renderTasks()
});

  //Delete tasks storage
  const deleteStorageButton = document.getElementById('deleteStorage')
  deleteStorageButton.addEventListener('click', () => {
    deleteTaskStorage()
    renderTasks()
    });

  // Render initial tasks
  renderTasks();
}

export function renderTasks() {
  const taskList = document.getElementById('taskList')
  taskList.innerHTML = '' // Clear the existing task list

  for (const task of uiTasks) {
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
  
  addTask(title, description, dueDate, priority);

  // Clear input and provide feedback
  taskTitle.value = '';
  taskDescription.value = '';
  dueDateInput.value = formatDate();
  priorityOption.value = "Medium";
  alert('Task added successfully!');

  renderTasks();
}

function handleTaskClick(event) {
  const target = event.target
  console.log(target)

  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
      // Checkbox was clicked, handle task completion
      const taskId = parseInt(target.closest('div[data-id]').dataset.id)
      const completed = target.checked
      updateTaskStatus(taskId, completed)
      renderTasks()
  } else if (target.tagName === 'BUTTON') {
      // Delete button was clicked, handle task deletion
      const taskId = parseInt(target.closest('div[data-id]').dataset.id)
      deleteTask(taskId)
      renderTasks()
  }
}

