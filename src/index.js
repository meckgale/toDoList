import './styles/reset.css'
import './styles/main.css'
import { initDOM } from './DOM'
import { initTodoApp } from "./toDoList"
import { initUI, renderTasks } from "./UI"
import { format, isValid, parseISO } from "date-fns";

// let date =  format(new Date(2024, 11, 11), 'yyyy MM dd')

// console.log(date)
// console.log(isValid(date))

initDOM()
initTodoApp()
initUI()

