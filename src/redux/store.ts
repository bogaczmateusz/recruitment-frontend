import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { todosSlice } from "./slices/todos.slice"

const rootReducer = combineReducers({
  [todosSlice.name]: todosSlice.reducer
})

export function makeStore() {
  return configureStore({
    reducer: rootReducer
  })
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
