import styles from "../../../scss/modules/TaskListHeader.module.scss"

const TaskListHeader = () => {
  return (
    <div className={styles.taskListHeader}>
      <div className={styles.taskListHeader_column_name}>Task name:</div>
      <div className={styles.taskListHeader_column_date}>Created at:</div>
      <div className={styles.taskListHeader_column_actions}>Actions:</div>
    </div>
  )
}

export default TaskListHeader
