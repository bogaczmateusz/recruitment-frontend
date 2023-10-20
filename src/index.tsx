import React from "react"
import ReactDOM from "react-dom/client"
import { Toaster } from "react-hot-toast"
import App from "./App"
import { Provider } from "react-redux"
import { store } from "./redux/store"

import "./scss/app.scss"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 4000,
          error: {
            style: {
              background: "#ca1212",
              color: "#fff"
            }
          },
          success: {
            style: {
              background: "#0d5c63",
              color: "#fff"
            },
            iconTheme: {
              primary: "#44a1a0",
              secondary: "#ffffff"
            }
          }
        }}
      />
      <App />
    </Provider>
  </React.StrictMode>
)
