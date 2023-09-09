import './styles/reset.css'
import './styles/main.css'
import Task from "./task"
import toDoList from "./toDoList"
import UI from "./UI"

let firstTask = new Task('projeye basla', 'yarin', 'onemli')
document.addEventListener('DOMContentLoaded', UI.creteaTask)
console.log(firstTask)
