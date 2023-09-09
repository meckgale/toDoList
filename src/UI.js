import toDoList from "./toDoList";

export default class UI {

    static creteaTask(name, dueDate, priority) {


    }

    static cretateButtons() {
      const taskList = document.createElement('div')
      taskList.classList.add('.task-list')
      const taskBtn = document.createElement('button')
      const content = document.querySelector('#content')
      content.appendChild(taskBtn)
    }
}