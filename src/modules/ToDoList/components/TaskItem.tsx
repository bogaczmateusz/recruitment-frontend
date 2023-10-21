import { useState } from "react"
import useTodos from "../../../hooks/useTodos"
import { BiSolidCheckCircle, BiTrash, BiEditAlt } from "react-icons/bi"
import EditToDoForm from "./EditToDoForm"

import styles from "../../../scss/modules/TaskItem.module.scss"

type Props = {
  id: number
  name: string
  date: string
  completed: boolean
}

const TaskItem = ({ id, name, date, completed }: Props) => {
  const [edit, setEdit] = useState<boolean>(false)
  const { removeTodo, completeTodo, editTodo } = useTodos()

  const handleRemove = (id: number) => {
    removeTodo({ id: id })
  }

  const handleComplete = (id: number, completed: boolean) => {
    completeTodo({ id: id, completed: completed })
  }

  const handleEdit = (id: number, name: string) => {
    editTodo({ id: id, name: name })
    setEdit(false)
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
          <div>
            {!edit ? (
              <h3
                className={
                  !completed
                    ? styles.taskItem_name
                    : styles.taskItem_name_completed
                }
              >
                <span onClick={() => setEdit(true)}>{name}</span>
              </h3>
            ) : (
              <EditToDoForm
                id={id}
                name={name}
                handleEdit={handleEdit}
                handleCancel={setEdit}
              />
            )}
          </div>
        </div>
        <div className={styles.taskItem_column_date}>
          <span className={styles.taskItem_column_date_label}>
            Created at:{" "}
          </span>
          {date}
        </div>
        <div className={styles.taskItem_column_actions}>
          <button
            className={styles.taskItem_button}
            onClick={() => setEdit((prevState) => !prevState)}
          >
            <BiEditAlt color="#0d5c63" size="20" />
          </button>
          <button
            className={styles.taskItem_button}
            onClick={() => handleRemove(id)}
          >
            <BiTrash color="#cc4949" size="20" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TaskItem
