import { ErrorMessage, Field } from "formik";
import type { ColumnType } from "../../types/types";
import css from "./SelectColumn.module.css";

interface SelectColumnsProps {
  list: ColumnType[];
  name: string;
}
const SelectColumn = ({ list, name }: SelectColumnsProps) => {
  if (!list) return <p>Sorry, no columns</p>;
  return list.length > 0 ? (
    <div className={css.selectWrap}>
      <Field as="select" name={name}>
        <option>choose status:</option>
        {list.map((el) => (
          <option key={el._id} value={el.index}>
            {el.title}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="span" />
    </div>
  ) : (
    <p>Sorry, the board list is not available</p>
  );
};

export default SelectColumn;
