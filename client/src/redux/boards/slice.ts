import { createSlice } from "@reduxjs/toolkit";
import type { BoardsInitStateTypes } from "../../types/types";
import {
  createBoard,
  createTask,
  deleteTask,
  deleteTheBoard,
  editBoard,
  editTask,
  getAllBoards,
  getTheBoard,
  patchTaskStatus,
} from "./operations";

const boardsInitState: BoardsInitStateTypes = {
  board: null,
  allBoards: [],
  tasks: [],
  editingTask: null,
  isModalOpen: "",
  loading: false,
  error: false,
};
export const slice = createSlice({
  name: "board",
  initialState: boardsInitState,
  reducers: {
    selectNoBoard(state) {
      state.board = null;
    },
    setModalOpen(state, action) {
      state.isModalOpen = action.payload;
    },
    setEditingTask(state, action) {
      state.editingTask = action.payload
    },
    setCodeError(state, action){
      state.error = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBoards.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBoards.fulfilled, (state, action) => {
        state.loading = false;
        state.allBoards = action.payload.data;
      })
      .addCase(getTheBoard.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTheBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.board = action.payload.board;
        state.tasks = action.payload.tasks;
      })
      .addCase(createBoard.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBoard.fulfilled, (state, action) => {
        state.loading = false;
        const name = action.payload.name;
        const _id = action.payload._id
        state.board = action.payload;
        console.log(name)
        state.allBoards = [...state.allBoards, {name, _id}];
        state.isModalOpen = ""
      })
      .addCase(createBoard.rejected, (state) => {
        state.loading = false;
        console.log("error in createBoard");
      })
      .addCase(editBoard.pending, (state) => {
        state.loading = true;
      })
      .addCase(editBoard.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(action.payload)
        state.board = action.payload;
        state.isModalOpen = ""
      })
      .addCase(deleteTheBoard.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTheBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.allBoards = state.allBoards.filter(
          (el) => el._id !== action.payload.data.boardId
        );
        state.board = null;
        state.tasks = [];
      })
      .addCase(createTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = [...state.tasks, action.payload];
        state.isModalOpen = ""
      }).addCase(editTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(editTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.map(el => el._id === action.payload._id ? action.payload : el);
        state.isModalOpen = ""
      })
      .addCase(patchTaskStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(patchTaskStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.map(el => el._id === action.payload._id ? action.payload : el);
      })
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.filter(el => el._id !== action.payload.taskId);
      });
  },
});

export default slice.reducer;

export const { selectNoBoard, setModalOpen, setEditingTask, setCodeError } = slice.actions;
