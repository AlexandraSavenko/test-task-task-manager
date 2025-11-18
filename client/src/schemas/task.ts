import * as Yup from "yup";
export const initTaskSchema = Yup.object().shape({
    title: Yup.string().required("Please give your task a name"),
    description: Yup.string().required("Please write some description"),
    status: Yup.string().required()
})