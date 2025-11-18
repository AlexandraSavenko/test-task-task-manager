import type { BoardFormType, TaskType } from "../types/types";

export const boardFormInitValues: BoardFormType = {
  name: "",
  currentColumnName: "",
  columns: [],
};

export const taskFormInitValues: TaskType = {
  title: "",
  description: "",
  status: ""
}