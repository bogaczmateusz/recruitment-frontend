import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

export type ToDo = {
  id: number
  name: string
  date: string
  completed: boolean
}

export interface CommonState {
  todos: ToDo[]
}

const initialState: CommonState = {
  todos: []
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo(state, action) {
      state.todos.unshift(action.payload)
    },
    removeToDo(state, action) {
      const newTodos = state.todos.filter(
        (item: ToDo) => item.id !== action.payload
      )
      state.todos = newTodos
    },
    completeToDo(state, action) {
      state.todos.map((todo: ToDo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed
        }
      })
    }
  }
})

export const { addToDo, removeToDo, completeToDo } = todosSlice.actions
export const selectTodos = (state: RootState) => state.todos.todos
export default todosSlice.reducer
