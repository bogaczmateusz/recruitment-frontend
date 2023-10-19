import useTodos from "../../../hooks/useTodos"
import ActionButton from "./ActionButton"

import styles from "../../../scss/modules/TaskItem.module.scss"

type Props = {
  id: number
  name: string
  date: string
  completed: boolean
}

const TaskItem = ({ id, name, date, completed }: Props) => {
  return (
    <li className={styles.taskItem}>
      <div className={styles.taskItem_columns}>
        <div className={styles.taskItem_column_name}>
          <label className={styles.taskItem_checkbox}>
            <input type="checkbox" />
            <span></span>
          </label>
          <h3 className={styles.taskItem_name}>{name}</h3>
        </div>
        <div className={styles.taskItem_column_date}>{date}</div>
        <div className={styles.taskItem_column_actions}>
          <ActionButton label="Edit" />
          <ActionButton label="Remove" />
        </div>
      </div>
    </li>
  )
}

export default TaskItem
