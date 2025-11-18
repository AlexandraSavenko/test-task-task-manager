import type { RootState } from "../store";

export const selectTheBoard = (state: RootState) => state.boards.board;
export const selectAllBoards = (state: RootState) => state.boards.allBoards;
export const selectTasks = (state: RootState) => state.boards.tasks;
export const selectEditingTask = (state: RootState) => state.boards.editingTask;
export const selectIsModalOpen = (state: RootState) => state.boards.isModalOpen;

export const selectLoading = (state: RootState) => state.boards.loading;
export const selectError = (state: RootState) => state.boards.error;
