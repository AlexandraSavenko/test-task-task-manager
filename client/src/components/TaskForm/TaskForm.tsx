import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import css from "./TaskForm.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectTheBoard } from "../../redux/boards/selectors";
import SelectColumn from "../SelectColumn/SelectColumn";
import Button from "../Button/Button";
import { taskFormInitValues } from "../../values/values";
import { initTaskSchema } from "../../schemas/task";
import type { TaskType } from "../../types/types";
import { createTask } from "../../redux/boards/operations";

const TaskForm = () => {
    const theBoard = useAppSelector(selectTheBoard)
  const colunms = theBoard?.columns;
  const dispatch = useAppDispatch();
  const handleTaskFormSubmit = (
    values: TaskType,
    actions: FormikHelpers<TaskType>
  ) => {
    if(!theBoard) return;
    
    dispatch(createTask({newTask: values, boardId: theBoard._id || ""}))
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={taskFormInitValues}
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
