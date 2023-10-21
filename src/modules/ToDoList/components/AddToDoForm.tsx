import { useFormik } from "formik"
import { BiListPlus } from "react-icons/bi"
import { AddToDoValidator } from "../../../validators/AddToDo.validator"
import { AddToDoRequest } from "../../../types/AddToDoRequest.dto"

import styles from "../../../scss/modules/AddToDoForm.module.scss"

type Props = {
  // eslint-disable-next-line
  handleAddToDo: ({ name }: { name: string }) => void
}

const AddToDoForm = ({ handleAddToDo }: Props) => {
  const formik = useFormik<AddToDoRequest>({
    initialValues: {
      taskname: ""
    },
    onSubmit: (values, actions) => {
      handleAddToDo({ name: values.taskname })

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
      <form onSubmit={formik.handleSubmit} data-testid="addtodo-form">
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
              <BiListPlus color="#ffffff" size="25" />
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
