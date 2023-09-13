import Task from "./toDoList";

export default class UI {

    static createTask(name, dueDate, priority) {


    }

    static createButtons() {
      const taskList = document.createElement('div')
      taskList.classList.add('.task-list')
      const taskBtn = document.createElement('button')
      const content = document.querySelector('#content')
      content.appendChild(taskBtn)
    }
}