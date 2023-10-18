import styles from "../../scss/modules/ToDoList.module.scss"
import AddToDoForm from "./components/AddToDoForm"
import Separator from "./components/Separator"
import TaskList from "./components/TaskList"

const ToDoList = () => {
  return (
    <div className={styles.todolist}>
      <AddToDoForm />
      <Separator />
      <TaskList todos={[]} title="You need to:" />
      <TaskList todos={[]} title="You have completed:" isCompletedTasks />
    </div>
  )
}

export default ToDoList
