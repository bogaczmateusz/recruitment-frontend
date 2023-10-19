import useTodos from "../../hooks/useTodos"
import AddToDoForm from "./components/AddToDoForm"
import TaskList from "./components/TaskList"

import styles from "../../scss/modules/ToDoList.module.scss"

const ToDoList = () => {
  const { addTodo, getIncompletedTodos, getCompletedTodos } = useTodos()
  const incompleted = getIncompletedTodos()
  const completed = getCompletedTodos()

  return (
    <>
      <div className={styles.todolist}>
        <AddToDoForm handleAddToDo={addTodo} />
        <TaskList
          todos={incompleted}
          title="Tasks:"
          emptyMessage="There is nothing you need to do yet."
        />
        <TaskList
          todos={completed}
          title="Completed tasks:"
          emptyMessage="There is nothing you have completed so far."
        />
      </div>
    </>
  )
}

export default ToDoList
