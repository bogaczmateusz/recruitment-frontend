import * as yup from "yup"
import { ObjectSchema } from "yup"
import { AddToDoRequest } from "../types/AddToDoRequest.dto"

export const AddToDoValidator: ObjectSchema<AddToDoRequest> = yup
  .object()
  .shape({
    taskname: yup
      .string()
      .required("Task name is required.")
      .min(5, "Task name should have at least 5 characters.")
  })
