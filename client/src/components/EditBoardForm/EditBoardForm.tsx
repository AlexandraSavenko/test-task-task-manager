import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./EditBoardForm.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectTheBoard } from "../../redux/boards/selectors";
import { convertBoardToFormValues, handleEditForm } from "../../utils/functions";
import { boardFormInitValues } from "../../values/values";
import Button from "../Button/Button";
import { initBoardSchema } from "../../schemas/board";

const EditBoardForm = () => {
  const dispatch = useAppDispatch();
  const boardToEdit = useAppSelector(selectTheBoard);
  const boardId = boardToEdit?._id || ""
  const initialValues = boardToEdit
    ? convertBoardToFormValues(boardToEdit)
    : boardFormInitValues;

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={initBoardSchema}
      onSubmit={(values, actions) => handleEditForm(values, actions, boardId, dispatch)}
    >
      {({ values }) => (
        <Form>
          <div className={css.fieldWrap}>
            <label htmlFor="boardName">Name:</label>
            <Field type="text" name="name" id="boardName" />
             <ErrorMessage name="name" component="span" />
            
          </div>
          
          {values.columns.map((_, index) => (
            <div className={css.fieldWrap} key={index}>
              <Field name={`columns[${index}].title`} />
              <ErrorMessage name={`columns[${index}].title`} component="span" />
            </div>
          ))}
          <Button type="submit">Save</Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditBoardForm;
