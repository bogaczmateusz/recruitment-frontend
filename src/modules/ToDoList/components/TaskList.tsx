import styles from "../../../scss/modules/TaskList.module.scss"
import { ToDo } from "../../../redux/slices/todos.slice"

type Props = {
  title: string
  todos: ToDo[]
  isCompletedTasks?: boolean
}

const TaskList = ({ todos, title, isCompletedTasks }: Props) => {
  if (todos.length < 1 && isCompletedTasks) return <></>

  return (
    <div className={styles.taskList}>
      <h3 className={styles.taskList_headline}>{title}</h3>
      <div className={styles.taskList_inner}>
        {todos.length > 0 ? (
          <ul>
            {todos.map((todo) => (
              <li>{todo.name}</li>
            ))}
          </ul>
        ) : (
          <div>There is nothing you need to do yet.</div>
        )}
      </div>
    </div>
  )
}

export default TaskList
