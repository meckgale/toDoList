import toDoList from "./toDoList";

export default class UI {

    static cretaeTask(name, dueDate, priority) {
        const taskList = document.createElement('div')
        taskList.classList.add('.task-list')
        taskList.innerHTML += `
        <button class="button-task" data-task-button>
        <div class="left-task-panel">
          <i class="far fa-circle"></i>
          <p class="task-content">${name}</p>
          <input type="text" class="input-task-name" data-input-task-name>
        </div>
        <div class="middle-task-panel">
          <p class="due-date" id="due-date">${dueDate}</p>
          <input type="date" class="input-due-date" data-input-due-date>
          <i class="fas fa-times"></i>
        </div>
        <div class="right-task-panel">
        <p class="priority" id="due-date">${priority}</p>
        <input type="text" class="input-priority" data-input-priority>
        <i class="fas fa-times"></i>
      </div>
      </button>` 
    }
}