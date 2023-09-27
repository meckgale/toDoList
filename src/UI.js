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
          <button id="editTaskBtn-${task.id}" name="editTaskBtn">Edit</button>
        </div>
        <div class="editContainer" id="editContainer-${task.id}"></div>
      </div>`

      //Create edit container
      const todoAppContainer = document.querySelector('#todoAppContainer')
      const editContainer = todoAppContainer.cloneNode(true)
      generateEditIDs(editContainer)
      editContainer.id = 'editContainer'
      editContainer.dataset.id = task.id
      console.log(editContainer)

      //Assign values to each input fields
      const editTaskTitle = document.querySelector('#editTitleContainer')


      //Append elements
      taskList.appendChild(listItem)
      taskList.appendChild(editContainer)
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
  console.log(target)

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
        //Add event listener for detail task button
        const targetedTask = target.closest('div[data-id]')
        console.log(targetedTask);
        const bottomContainer = targetedTask.querySelector('.bottomContainer')
        bottomContainer.classList.toggle('active');
        console.log(bottomContainer.value)
    }
    // else if(target.name === 'editTaskBtn') {
    //   //Add event listener to edit task
    //   const targetedTask = target.closest('div[data-id]')
    //   console.log(targetedTask);
    //   const targetBtn = document.getElementById(`${target.id}`)
    //   console.log(targetBtn)
    //   console.log(target.id)
    //   initAppContainer(targetBtn, 'toggle')
    // }
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

// function editTask() {
//   const todoAppContainer = document.querySelector('#todoAppContainer')
//   const editContainer = todoAppContainer.cloneNode(true)
//   generateEditIDs(editContainer)
//   editContainer.id = generateTaskId();
//   console.log(editContainer)
//   return editContainer
// }
