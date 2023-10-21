import { act, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Provider } from "react-redux"
import { store } from "../../../redux/store"
import AddToDoForm from "../components/AddToDoForm"

const mockFn = jest.fn()

describe("AddToDoForm Tests", () => {
  it("should render label", () => {
    render(
      <Provider store={store}>
        <AddToDoForm handleAddToDo={mockFn} />
      </Provider>
    )
    const label = screen.getByLabelText("Provide your task name:")
    expect(label).toBeInTheDocument()
  })
  it("should render input", () => {
    render(
      <Provider store={store}>
        <AddToDoForm handleAddToDo={mockFn} />
      </Provider>
    )
    const input = screen.getByRole("textbox")
    expect(input).toBeInTheDocument()
  })
  it("should render button", () => {
    render(
      <Provider store={store}>
        <AddToDoForm handleAddToDo={mockFn} />
      </Provider>
    )
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  })
  it("should be able to provide value in input", async () => {
    render(
      <Provider store={store}>
        <AddToDoForm handleAddToDo={mockFn} />
      </Provider>
    )
    const inputElement = screen.getByRole("textbox")
    await act(async () => {
      userEvent.type(inputElement, "Value")
    })
    expect(inputElement).toHaveValue("Value")
  })
})
