import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./BoardForm.module.css";
// import type { BoardFormType } from "../../types/types";
import { initBoardSchema } from "../../schemas/board";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import { handleAddColumn, handleDeleteColumn, handleSubmit } from "../../utils/functions";
import { useAppDispatch } from "../../hooks/redux";
// import { createBoard } from "../../redux/boards/operations";
import Button from "../Button/Button";
import { boardFormInitValues } from "../../values/values";



const BoardForm = () => {
  const dispatch = useAppDispatch();
  // const handleSubmit = (
  //   values: BoardFormType,
  //   actions: FormikHelpers<BoardFormType>
  // ) => {
  //   const { currentColumnName, ...cleanValues } = values;
  //   dispatch(createBoard(cleanValues));
  //   console.log("submit");
  //   console.log(cleanValues, currentColumnName);
  //   actions.resetForm();
  // };

  return (
    <Formik
      initialValues={boardFormInitValues}
      validationSchema={initBoardSchema}
      onSubmit={(values, actions) => handleSubmit(values,actions, dispatch )}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form>
          <div className={css.fieldWrap}>
            <label htmlFor="boardName">Name:</label>
            <Field
              id="boardName"
              name="name"
              placeholder="My boards is called..."
            />
            <ErrorMessage name="name" component="span" />
          </div>

          <div className={css.fieldmWrap}>
            <label htmlFor="colunmName">Column name:</label>
            <Field
              id="columnName"
              name="currentColumnName"
              placeholder="My column is called..."
            />
            <Button onClick={() => handleAddColumn(values, setFieldValue)}>
              <MdOutlinePostAdd />
            </Button>
            {/* <button
              type="button"
              onClick={() => handleAddColumn(values, setFieldValue)}
            >
              <MdOutlinePostAdd />
            </button> */}
            <ErrorMessage name="columns" component="span" />
          </div>
          <div className={css.listOfColumns}>
            <p>List of columns:</p>
            {values.columns.length > 0 && (
              <ul>
                {values.columns.map((column, index) => (
                  <li key={index}>
                    <span>{column.title}</span>
                    {/* <button
                      type="button"
                      onClick={() =>
                        handleDeleteColumn(values, setFieldValue, column)
                      }
                    >
                      <MdDeleteForever />
                    </button> */}
                    <Button
                      onClick={() =>
                        handleDeleteColumn(values, setFieldValue, column)
                      }
                    >
                      <MdDeleteForever />
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button type="submit" disabled={isSubmitting}>
            Save board
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BoardForm;
