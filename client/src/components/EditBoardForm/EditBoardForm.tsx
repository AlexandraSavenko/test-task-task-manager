import { Field, Form, Formik } from "formik";
import css from "./EditBoardForm.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectTheBoard } from "../../redux/boards/selectors";
import { convertBoardToFormValues, handleEditForm } from "../../utils/functions";
import { boardFormInitValues } from "../../values/values";
import Button from "../Button/Button";

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
      onSubmit={(values, actions) => handleEditForm(values, actions, boardId, dispatch)}
    >
      {({ values }) => (
        <Form>
          <Field type="text" name="name" id={boardToEdit?.name} />
          {values.columns.map((col, index) => (
            <div className={css.inputWrap} key={index}>
              <Field name={`columns[${index}].title`} />
            </div>
          ))}
          <Button type="submit">Save</Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditBoardForm;
