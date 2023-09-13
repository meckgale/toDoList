import './styles/reset.css'
import './styles/main.css'
import Task from "./toDoList"
import UI from "./UI"

let firstTask = new Task('start project', 'now', 'important')
document.addEventListener('DOMContentLoaded', UI.createButtons)
console.log(firstTask)
