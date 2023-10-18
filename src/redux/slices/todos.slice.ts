import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"

export type ToDo = {
  id: string
  name: string
  completed: boolean
}

export interface CommonState {
  todos: ToDo[]
}

const initialState: CommonState = {
  todos: [
    {
      id: "st523fasdf",
      name: "name",
      completed: false
    }
  ]
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos(state, action) {
      state.todos = action.payload
    }
  }
})

export const { setTodos } = todosSlice.actions
export const selectTodos = (state: RootState) => state.todos.todos
export default todosSlice.reducer
