import { Schema, model } from "mongoose";

const columnSchema = new Schema({
  title: { type: String, required: true },
  // index: {type: String, required: true}
});
const boardSchema = new Schema(
  {
    name: { type: String, required: true },
    columns: {
      type: [columnSchema],
      required: true,
      validate: {
        validator: (arr: { title: string }[]) =>
          arr.length >= 3 && arr.length <= 5,
        message: "A board must have between 3 and 5 columns.",
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const BoardsCollection = model("Board", boardSchema);

export default BoardsCollection;
