import * as Yup from "yup";

const initColumnSchema = Yup.object().shape({
  title: Yup.string()
    .required("A column must have a title")
    .min(2, "The title should be at least two characters")
    .max(30, "Please make the name shourter"),
});

export const initBoardSchema = Yup.object().shape({
  name: Yup.string().required("Please give a name to your new board"),
  columns: Yup.array()
    .of(initColumnSchema)
    .min(3, "At least three columns")
    .max(5, "No more than five columns")
    .required("Please create at least thress columns"),
});
