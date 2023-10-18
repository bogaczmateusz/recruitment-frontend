import PageTitle from "./components/PageTitle/PageTitle"
import ToDoList from "./modules/ToDoList/ToDoList"
import styles from "./scss/modules/App.module.scss"

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app_container}>
        <PageTitle
          headline="To-do list"
          intro={
            <>
              Welcome to your ultimate{" "}
              <span className="text-darkgreen">
                <strong>To-do list</strong>
              </span>{" "}
              for staying organized and productive.
              <br />
              <br />
              Let's get things{" "}
              <span className="text-darkgreen">
                <strong>done!</strong>
              </span>
            </>
          }
        />
        <ToDoList />
      </div>
    </div>
  )
}

export default App
