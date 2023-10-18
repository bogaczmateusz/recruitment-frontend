import PageTitle from "./components/PageTitle/PageTitle"
import ToDoList from "./modules/ToDoList/ToDoList"
import styles from "./scss/modules/App.module.scss"

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app_container}>
        <PageTitle
          headline="ToDo List"
          intro="Welcome to your ultimate ToDo list for staying organized and productive. Let's get things done!"
        />
        <ToDoList />
      </div>
    </div>
  )
}

export default App
