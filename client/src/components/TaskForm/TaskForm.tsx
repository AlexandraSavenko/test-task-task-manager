import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import css from "./TaskForm.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectEditingTask, selectTheBoard } from "../../redux/boards/selectors";
import SelectColumn from "../SelectColumn/SelectColumn";
import Button from "../Button/Button";
import { taskFormInitValues } from "../../values/values";
import { initTaskSchema } from "../../schemas/task";
import type { TaskType } from "../../types/types";
import { createTask, editTask } from "../../redux/boards/operations";
import { convertTaskToFormValues } from "../../utils/functions";
import { setCodeError } from "../../redux/boards/slice";

const TaskForm = ({formType}:{formType: string}) => {
    const theBoard = useAppSelector(selectTheBoard)
    const editingTask = useAppSelector(selectEditingTask)
  const colunms = theBoard?.columns;
  const dispatch = useAppDispatch();
  console.log(formType)
  const handleTaskFormSubmit = (
    values: TaskType,
    actions: FormikHelpers<TaskType>
  ) => {
    if(!theBoard){
     dispatch(setCodeError("Board Id is missing in handleTaskFormSubmit"));
      return;}    
    if(formType === "editTask"){
      dispatch(editTask({editedTask: values, boardId: theBoard._id || "", taskId: editingTask?._id || ""}))
    return;
    }
    dispatch(createTask({newTask: values, boardId: theBoard._id || ""}))
    actions.resetForm();
  };
  const initialValues = formType === "editTask" && editingTask ? convertTaskToFormValues(editingTask)  : taskFormInitValues
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={initTaskSchema}
      onSubmit={handleTaskFormSubmit}
    >
      <Form>
        <div className={css.inputWrap}>
          <label htmlFor=""></label>
          <Field id="taskName" name="title" />
          <ErrorMessage name="title" component="span" />
        </div>
        <div className={css.inputWrap}>
          <label htmlFor=""></label>
          <Field as="textarea" id="taskDescript" name="description" />
        <ErrorMessage name="description" component="span" />

        </div>
        <SelectColumn list={colunms || []} name="status" />
        <Button type="submit">Save task</Button>
      </Form>
    </Formik>
  );
};

export default TaskForm;
