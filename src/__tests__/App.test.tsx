import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import App from "../App"

describe("Basic Tests", () => {
  it("should render main headline", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const headline = screen.getByRole("heading", { name: "To-do list" })
    expect(headline).toBeInTheDocument()
  })
  it("should render form to add task", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const form = screen.getByTestId("addtodo-form")
    expect(form).toBeInTheDocument()
  })
  it("should render list for tasks", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const taskListHeadline = screen.getByRole("heading", { name: "Tasks:" })
    expect(taskListHeadline).toBeInTheDocument()
  })
  it("should render list for completed tasks", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const taskListHeadline = screen.getByRole("heading", {
      name: "Completed tasks:"
    })
    expect(taskListHeadline).toBeInTheDocument()
  })
})
