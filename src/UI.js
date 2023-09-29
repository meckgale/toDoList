import { uiTasks, deleteTask, updateTaskStatus, addTask, sortTasks, filterTasks, deleteTaskStorage, generateEditIDs } from "./toDoList"
import { formatDate } from "./currentDate";

export function initUI() {
  // Initialize the UI, render tasks, and add event listeners
  const taskList = document.getElementById('taskList')

  // Event delegation: Add a single click event listener to the task list
  taskList.addEventListener('click', handleTaskClick)

  //New task button
  const newTaskBtn = document.getElementById('appContainerButton')
  initAppContainer(newTaskBtn, 'toggle')

  // Add event listener for adding tasks
  const addTaskBtn = document.getElementById('addTaskBtn');
  addTaskBtn.addEventListener('click', () => {
    handleAddTask()
    initAppContainer(addTaskBtn, 'remove')
    renderTasks();
  });

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
            <button class="detailTaskBtn" id="detailTaskBtn-${task.id}" name="detailTaskBtn">V</button>
            <input type="checkbox" id="taskCheckbox-${task.id}" name="taskCheckbox" ${task.completed ? 'checked' : ''}>
            <div class="taskTitle" id="taskTitle-${task.id}">${task.title}</div>
          </div>
          <div class="topRight">
            <div class="taskDue" id="taskDue-${task.id}">Due: ${task.dueDate}</div>
            <div class="taskPriority" id="taskPriority-${task.id}">Priority: ${task.priority}</div>
            <button id="deleteTaskBtn-${task.id}" name="deleteTaskBtn">Delete</button>
          </div>
        </div>
        <div class="bottomContainer">
          <div class="taskDescription" id="taskDescription-${task.id}">${task.description}</div>
          <button id="editTaskBtn-${task.id}" name="editTaskBtn">Edit</button>
        </div>
      </div>`
      
      //Append elements
      taskList.appendChild(listItem)
      
      //Generate task editor
      editTaskGenerator(taskList, listItem)
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
}

function handleTaskClick(event) {
  const target = event.target

  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
      // Checkbox was clicked, handle task completion
      const taskId = parseInt(target.closest('div[data-id]').dataset.id)
      const completed = target.checked
      updateTaskStatus(taskId, completed)
      renderTasks()
  } else if (target.tagName === 'BUTTON') {
    if(target.name === 'deleteTaskBtn') {
        // Delete button was clicked, handle task deletion
        const taskId = parseInt(target.closest('div[data-id]').dataset.id)
        deleteTask(taskId)
        renderTasks()
    }
    else if(target.name === 'detailTaskBtn') {
        // Detail button was clicked, handle detail preview
        const targetedTask = target.closest('div[data-id]')
        const bottomContainer = targetedTask.querySelector('.bottomContainer')
        bottomContainer.classList.toggle('active');
    }
    else if(target.name === 'editTaskBtn') {
        // Edit button was clicked, handle task edit

        //Select clicked task item
        const selectedListItem = target.closest('div[data-id]')

        //Generate input field for editing
        // editTaskGenerator(taskList, selectedListItem)
        const selectedEditContainer = document.querySelector(`[id="editContainer"][data-id="${selectedListItem.dataset.id}"]`)

        //Assign values of selected task to input field
        assignValues(selectedListItem, selectedEditContainer)
        selectedEditContainer.classList.toggle('working')

        const taskId = parseInt(target.closest('div[data-id]').dataset.id)

        const updateTaskBtn = document.querySelector(`[id="editAddTaskBtn"][data-id="${selectedListItem.dataset.id}"]`)

    }
    else if(target.name === 'editAddTaskBtn') {
      //Select edit list item
      const selectedListItem = target.closest('div[data-id]')

      //Select edit container
      const selectedEditContainer = document.querySelector(`[id="editContainer"][data-id="${selectedListItem.dataset.id}"]`)

      //Assign values on the container to updated list
      function handleUpdateTask() {
        const taskTitle = selectedEditContainer.querySelector('#editTaskTitle');
        const title = taskTitle.value.trim();
      
        if (title === '') {
            alert('Add title for task!');
            return; // Don't add empty tasks
        }
      
        const taskDescription = selectedEditContainer.querySelector('#editTaskDescription')
        const description = taskDescription.value
      
        if (description === '') {
            alert('Add description for task!');
            return; // Don't add empty tasks
        }
      
        const dueDateInput = selectedEditContainer.querySelector('#editTaskDueDate')
        const dueDate = dueDateInput.value
      
        const priorityOption = selectedEditContainer.querySelector('#editTaskPriority')
        const priority = priorityOption.value
        
        addTask(title, description, dueDate, priority);
      }

      //Select task id to be edited and delete it after updated task created
      const taskId = parseInt(target.closest('div[data-id]').dataset.id)
  
      handleUpdateTask()
      deleteTask(taskId)
      renderTasks()
    }
  }
}

function initAppContainer(element, action) {
  element.addEventListener('click', () => {
    const inputAppContainer = document.getElementById('todoAppContainer')
    if(action === 'add') {
      inputAppContainer.classList.add('active')
    }
    else if(action === 'remove') {
      inputAppContainer.classList.remove('active')
    }
    else if(action === 'toggle') {
      inputAppContainer.classList.toggle('active')
    }
  })
}

//Create an input fileds from todoAppContainer to edit selected task
function editTaskGenerator(parentElement, listElement) {
  const todoAppContainer = document.querySelector('#todoAppContainer')
  const editContainer = todoAppContainer.cloneNode(true)
  generateEditIDs(editContainer)
  editContainer.id = 'editContainer'
  editContainer.dataset.id = listElement.dataset.id
  editContainer.querySelector('#editAddTaskBtn').textContent = 'Update Task'
  editContainer.querySelector('#editAddTaskBtn').name = 'editAddTaskBtn'
  editContainer.querySelector('#editAddTaskBtn').dataset.id = listElement.dataset.id
  parentElement.appendChild(editContainer)
}

//Create a function to assign values of an elemnt to other
function assignValues(originalElement, assignedElement) {
  
  // //Assign values to input fields
  assignedElement.querySelector('#editTaskTitle').value = originalElement.querySelector('.taskTitle').textContent
  assignedElement.querySelector('#editTaskDescription').value = originalElement.querySelector('.taskDescription').textContent
  assignedElement.querySelector('#editTaskDueDate').value = originalElement.querySelector('.taskDue').innerHTML.slice(5)
  assignedElement.querySelector('#editTaskPriority').value = originalElement.querySelector('.taskPriority').innerHTML.slice(10)
}

  