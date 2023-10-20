import useTodos from "../../../hooks/useTodos"
import { BiSolidCheckCircle, BiTrash, BiEditAlt } from "react-icons/bi"

import styles from "../../../scss/modules/TaskItem.module.scss"

type Props = {
  id: number
  name: string
  date: string
  completed: boolean
}

const TaskItem = ({ id, name, date, completed }: Props) => {
  const { removeTodo, completeTodo } = useTodos()

  const handleRemove = (id: number) => {
    removeTodo({ id: id })
  }

  const handleComplete = (id: number, completed: boolean) => {
    completeTodo({ id: id, completed: completed })
  }

  const handleEdit = (id: number) => {
    console.log(`Edit: ${id}`)
  }

  return (
    <li className={styles.taskItem}>
      <div className={styles.taskItem_columns}>
        <div className={styles.taskItem_column_name}>
          <label className={styles.taskItem_checkbox}>
            <input
              type="checkbox"
              onChange={() => handleComplete(id, completed)}
              checked={completed}
            />
            <span>
              <BiSolidCheckCircle color="#0d5c63" />
            </span>
          </label>
          <h3
            className={
              !completed ? styles.taskItem_name : styles.taskItem_name_completed
            }
          >
            {name}
          </h3>
        </div>
        <div className={styles.taskItem_column_date}>{date}</div>
        <div className={styles.taskItem_column_actions}>
          {!completed && (
            <button
              className={styles.taskItem_button}
              onClick={() => handleEdit(id)}
            >
              <BiEditAlt color="#0d5c63" size="20" />
            </button>
          )}
          <button
            className={styles.taskItem_button}
            onClick={() => handleRemove(id)}
          >
            <BiTrash color="#ca1212" size="20" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TaskItem
