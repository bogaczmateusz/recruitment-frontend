import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action
} from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import thunk from "redux-thunk"
import { todosSlice } from "./slices/todos.slice"

const rootReducer = combineReducers({
  [todosSlice.name]: todosSlice.reducer
})

export function makeStore() {
  const isServer = typeof window === "undefined"
  if (isServer) {
    return configureStore({
      reducer: rootReducer
    })
  }

  const persistConfig = {
    key: "root",
    storage
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store: any = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
  })
  store._persistor = persistStore(store)
  return store
}

export const store = makeStore()
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>
