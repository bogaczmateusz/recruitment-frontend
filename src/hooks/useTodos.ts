import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../redux/store"
import { selectTodos, addToDo } from "../redux/slices/todos.slice"
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
  }

  // Remove todo
  const removeTodo = ({ id }: { id: number }) => {
    console.log(id)
  }

  return { todos, getIncompletedTodos, getCompletedTodos, addTodo, removeTodo }
}

export default useTodos
