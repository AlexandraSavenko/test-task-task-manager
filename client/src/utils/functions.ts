import type { FormikHelpers } from "formik";
import type { BoardFormType, ColumnType } from "../types/types";

export const handleAddColumn = (
    values: BoardFormType,
    setFieldValue: FormikHelpers<BoardFormType>["setFieldValue"]
  ) => {
    if (values.currentColumnName) {
      setFieldValue("columns", [
        ...values.columns,
        {
          title: values.currentColumnName,
        },
      ]);
      setFieldValue("currentColumnName", "");
    }
  };

  export const handleDeleteColumn = (
    values: BoardFormType,
    setFieldValue: FormikHelpers<BoardFormType>["setFieldValue"],
    column: ColumnType
  ) => {
    const newListOfColumns = values.columns.filter(
      (el) => el.title !== column.title
    );
    setFieldValue("columns", newListOfColumns);
  };
