import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    boardId: {type: String, required: true}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TaskCollection = model("Task", taskSchema);

export default TaskCollection;
