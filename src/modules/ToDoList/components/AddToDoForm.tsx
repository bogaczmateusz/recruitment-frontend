import { useFormik } from "formik"
import styles from "../../../scss/modules/AddToDoForm.module.scss"
import { AddToDoValidator } from "../../../validators/AddToDo.validator"
import { AddToDoRequest } from "../../../types/AddToDoRequest.dto"

const AddToDoForm = () => {
  const formik = useFormik<AddToDoRequest>({
    initialValues: {
      taskname: ""
    },
    onSubmit: (values, actions) => {
      actions.setSubmitting(false)
      actions.resetForm({
        values: {
          taskname: ""
        }
      })
    },
    validationSchema: AddToDoValidator
  })

  return (
    <div className={styles.addToDoForm}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.addToDoForm_input}>
          <label htmlFor="taskname">Provide your task name:</label>
          <div className={styles.addToDoForm_row}>
            <input
              id="taskname"
              type="text"
              name="taskname"
              onChange={formik.handleChange}
              value={formik.values.taskname}
            />
            <button type="submit" className={styles.addToDoForm_button}>
              Add task
            </button>
          </div>
          {formik.errors.taskname && (
            <span className={styles.addToDoForm_error}>
              {formik.errors.taskname}
            </span>
          )}
        </div>
      </form>
    </div>
  )
}

export default AddToDoForm
