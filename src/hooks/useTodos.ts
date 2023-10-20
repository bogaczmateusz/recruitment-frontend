import toast from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../redux/store"
import {
  selectTodos,
  addToDo,
  removeToDo,
  completeToDo
} from "../redux/slices/todos.slice"
import { ToDo } from "../redux/slices/todos.slice"

const useTodos = () => {
  const dispatch = useDispatch<AppDispatch>()

  // Get all todos
  const todos = useSelector(selectTodos)

  // Get incompleted todos
  const getIncompletedTodos = () => {
    const incompleted: ToDo[] = todos.filter((todo: ToDo) => !todo.completed)
    return incompleted
  }

  // Get completed todos
  const getCompletedTodos = () => {
    const completed: ToDo[] = todos.filter((todo: ToDo) => todo.completed)
    return completed
  }

  // Add todo
  const addTodo = ({ name }: { name: string }) => {
    const timestamp = Date.now()
    const dateFormatted = new Date(timestamp).toLocaleDateString()

    dispatch(
      addToDo({
        id: timestamp,
        name: name,
        date: dateFormatted,
        completed: false
      })
    )
    toast.success("Task added.")
  }

  // Remove todo
  const removeTodo = ({ id }: { id: number }) => {
    dispatch(removeToDo(id))
    toast.success("Task removed.")
  }

  // Complete todo
  const completeTodo = ({
    id,
    completed
  }: {
    id: number
    completed: boolean
  }) => {
    dispatch(completeToDo(id))
    if (!completed) {
      toast.success("Task completed.")
    } else {
      toast.success("Task restored.")
    }
  }

  return {
    todos,
    getIncompletedTodos,
    getCompletedTodos,
    addTodo,
    removeTodo,
    completeTodo
  }
}

export default useTodos
