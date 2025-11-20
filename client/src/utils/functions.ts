import type { FormikHelpers } from "formik";
import type {
  BoardFormType,
  BoardType,
  ColumnType,
  TaskType,
} from "../types/types";
import type { AppDispatch } from "../redux/store";
import {
  createBoard,
  deleteTask,
  deleteTheBoard,
  editBoard,
  patchTaskStatus,
} from "../redux/boards/operations";
import type { DragEndEvent } from "@dnd-kit/core";

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

export const convertBoardToFormValues = (board: BoardType) => ({
  name: board.name,
  columns: board.columns.map((col) => ({
    title: col.title,
    _id: col._id,
  })),
});

export const convertTaskToFormValues = (task: TaskType) => ({
  title: task.title,
  description: task.description,
  status: task.status,
});
export const handleSubmit = (
  values: BoardFormType,
  actions: FormikHelpers<BoardFormType>,
  dispatch: AppDispatch
) => {
  const cleanValues = {
    name: values.name,
    columns: values.columns
  }
  dispatch(createBoard(cleanValues));
  actions.resetForm();
};

export const handleEditForm = (
  values: BoardFormType,
  actions: FormikHelpers<BoardFormType>,
  boardId: string,
  dispatch: AppDispatch
) => {
  dispatch(editBoard({ editedBoard: values, boardId }));
  actions.resetForm();
};

export const handleDeleteBoard = (
  boardId: string | undefined,
  dispatch: AppDispatch
) => {
  if (!boardId) return;
  dispatch(deleteTheBoard(boardId));
};

export const handleDeleteTask = (
  taskId: string | undefined,
  boardId: string | undefined,
  dispatch: AppDispatch
) => {
  if (!taskId || !boardId) return;
  dispatch(deleteTask({ taskId, boardId }));
};
// export const handleEditBoard = (dispatch: AppDispatch) => {
//   dispatch(setModalOpen("editBoard"))
// }
export const handleDragEnd = (
  event: DragEndEvent,
  boardId: string,
  dispatch: AppDispatch
) => {
  const { active, over } = event;
  if (!over) return;
  const taskId = active.id as string;
  const newStatus = over.id as string;
  dispatch(patchTaskStatus({ boardId, taskId, update: { status: newStatus } }));
};
