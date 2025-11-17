import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import css from "./BoardForm.module.css";
import type { BoardFormType } from "../../types/types";
import { initBoardSchema } from "../../schemas/board";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";



const boardFormInitValues: BoardFormType = {
  name: "",
  currentColumnName: "",
  columns: [],
};

const BoardForm = () => {
  const handleSubmit = (
    values: BoardFormType,
    actions: FormikHelpers<BoardFormType>
  ) => {
    console.log("submit")
    console.log(values)
    actions.resetForm();
  };

  const handleAddColumn = (values: BoardFormType, setFieldValue) => {
                if (values.currentColumnName) {
                  setFieldValue("columns", [
                    ...values.columns,
                    {
                      title: values.currentColumnName,
                    },
                  ]);
                  setFieldValue("currentColumnName", "");
                }
              }
  return (
    <Formik
      initialValues={boardFormInitValues}
      validationSchema={initBoardSchema}
      onSubmit={handleSubmit}
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
            <ErrorMessage name="name" component="span"/>
          </div>

          <div className={css.fieldmWrap}>
            <label htmlFor="colunmName">Column name:</label>
            <Field
              id="columnName"
              name="currentColumnName"
              placeholder="My column is called..."
            />
            
            <button
              type="button"
              onClick={() => handleAddColumn(values, setFieldValue)}
            >
              <MdOutlinePostAdd />
            </button>
            <ErrorMessage name="columns" component="span"/>
          </div>
          <div className={css.listOfColumns}>
            <p>List of columns:</p>
            {
              values.columns.length > 0 && (
                <ul>
                  {values.columns.map((column, index) => <li key={index}>
                    <span>{column.title}</span>
                    <button type="button" onClick={() => {
                      const newListOfColumns = values.columns.filter(el => el.title !== column.title)
                      setFieldValue("columns", newListOfColumns)
                    }}><MdDeleteForever /></button>
                    </li>)}
                </ul>
              )
            }
          </div>
          <button type="submit" disabled={isSubmitting}>Save board</button>
        </Form>
      )}
    </Formik>
  );
};

export default BoardForm;
