import { ToDo } from "../../../redux/slices/todos.slice"
import Separator from "../../../components/Separator/Separator"

import styles from "../../../scss/modules/TaskList.module.scss"
import TaskItem from "./TaskItem"
import TaskListHeader from "./TaskListHeader"

type Props = {
  todos: ToDo[]
  title: string
  emptyMessage: string
}

const TaskList = ({ todos, title, emptyMessage }: Props) => {
  return (
    <>
      <Separator />
      <div className={styles.taskList}>
        <h3 className={styles.taskList_headline}>{title}</h3>
        <div className={styles.taskList_inner}>
          {todos.length > 0 ? (
            <>
              <TaskListHeader />
              <ul>
                {todos.map((todo) => (
                  <TaskItem
                    key={todo.id}
                    id={todo.id}
                    name={todo.name}
                    date={todo.date}
                    completed={todo.completed}
                  />
                ))}
              </ul>
            </>
          ) : (
            <div>{emptyMessage}</div>
          )}
        </div>
      </div>
    </>
  )
}

export default TaskList
