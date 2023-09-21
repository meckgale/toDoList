import './styles/reset.css'
import './styles/main.css'
import { initDOM } from './DOM'
import { initTodoApp } from "./toDoList"
import { initUI, renderTasks } from "./UI"

initDOM()
initTodoApp()
initUI()

