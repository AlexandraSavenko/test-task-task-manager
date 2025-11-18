import { createSlice } from "@reduxjs/toolkit";
import type { BoardsInitStateTypes } from "../../types/types";
import { createBoard, createTask, deleteTheBoard, getAllBoards, getTheBoard } from "./operations";

const boardsInitState: BoardsInitStateTypes = {
  board: null,
  allBoards: [],
  tasks: [],
  loading: false,
  error: false,
};
export const slice = createSlice({
  name: "board",
  initialState: boardsInitState,
  reducers: {
    selectNoBoard (state){
      state.board = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBoards.pending, (state) => {
        state.loading = true;
    }).addCase(getAllBoards.fulfilled, (state, action) => {
        state.loading = false;
        state.allBoards = action.payload.data;
    }).addCase(getTheBoard.pending, (state) => {
        state.loading = true;
    }).addCase(getTheBoard.fulfilled, (state, action) => {
      console.log("getTheBoard:", action.payload)
        state.loading = false;
        state.board = action.payload.board;
        state.tasks = action.payload.tasks;
    })
      .addCase(createBoard.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBoard.fulfilled, (state, action) => {
        state.loading = false;
        const newBoard = action.payload.data
        state.board = newBoard;
        state.allBoards = [...state.allBoards]
        console.log("createBoard action payload from slice", action.payload.data);
      })
      .addCase(createBoard.rejected, (state) => {
        state.loading = false;
        console.log("error in createBoard");
      }).addCase(deleteTheBoard.pending, (state) => {
        state.loading = true;
    }).addCase(deleteTheBoard.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload)
        state.allBoards = state.allBoards.filter(el => el._id !== action.payload.data.boardId);
        state.board = null;
        state.tasks = [];
    }).addCase(createTask.pending, (state) => {
      state.loading = true;
    }).addCase(createTask.fulfilled, (state, action) => {
      state.loading = false;
      state.tasks = [...state.tasks, action.payload]
    })
    ;
  },
});

export default slice.reducer;

export const { selectNoBoard} = slice.actions;