import { useEffect, useRef } from "react"
import { useFormik } from "formik"
import { BiCheck } from "react-icons/bi"
import { AddToDoRequest } from "../../../types/AddToDoRequest.dto"
import { AddToDoValidator } from "../../../validators/AddToDo.validator"

import styles from "../../../scss/modules/EditToDoForm.module.scss"

type Props = {
  id: number
  name: string
  // eslint-disable-next-line
  handleEdit: (id: number, name: string) => void
  handleCancel: React.Dispatch<React.SetStateAction<boolean>>
}

const EditToDoForm = ({ id, name, handleEdit, handleCancel }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const formik = useFormik<AddToDoRequest>({
    initialValues: {
      taskname: name
    },
    onSubmit: (values, actions) => {
      handleEdit(id, values.taskname)
      actions.setSubmitting(false)
    },
    validationSchema: AddToDoValidator
  })

  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.focus()
  }, [])

  return (
    <div className={styles.editToDoForm}>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="taskname"
          ref={inputRef}
          value={formik.values.taskname}
          onChange={formik.handleChange}
        ></input>
        {formik.errors.taskname && (
          <span className={styles.editToDoForm_error}>
            {formik.errors.taskname}
          </span>
        )}
        <div className={styles.editToDoForm_actions}>
          <button
            type="button"
            onClick={() => handleCancel(false)}
            className={`${styles.editToDoForm_button} ${styles.editToDoForm_button_cancel}`}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`${styles.editToDoForm_button} ${styles.editToDoForm_button_accept}`}
          >
            <BiCheck color="#efefef" size="20" style={{ marginTop: "-2px" }} />
            Accept
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditToDoForm
