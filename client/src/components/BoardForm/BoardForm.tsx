import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./BoardForm.module.css";
import { initBoardSchema } from "../../schemas/board";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import { handleAddColumn, handleDeleteColumn, handleSubmit } from "../../utils/functions";
import { useAppDispatch } from "../../hooks/redux";
import Button from "../Button/Button";
import { boardFormInitValues } from "../../values/values";



const BoardForm = () => {
  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={boardFormInitValues}
      validationSchema={initBoardSchema}
      onSubmit={(values, actions) => handleSubmit(values,actions, dispatch )}
    >
      {({ values, setFieldValue }) => (
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

          <div className={css.fieldWrap}>
            <label htmlFor="colunmName">Column name:</label>
            <div className={css.columnCreateWrap}>
              <Field
              id="columnName"
              name="currentColumnName"
              placeholder="My column is called..."
            />
            <Button onClick={() => handleAddColumn(values, setFieldValue)}>
              <MdOutlinePostAdd />
            </Button>
            </div>
            
            <ErrorMessage name="columns" component="span" />
          </div>
          <div className={css.listOfColumns}>
            <p>List of columns:</p>
            {values.columns.length > 0 && (
              <ul>
                {values.columns.map((column, index) => (
                  <li key={index}>
                    <span>{column.title}</span>
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
          <Button type="submit">Save</Button>
        </Form>
      )}
    </Formik>
  );
};

export default BoardForm;
