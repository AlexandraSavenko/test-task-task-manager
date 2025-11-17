import { createSlice } from "@reduxjs/toolkit";
import type { BoardsInitStateTypes } from "../../types/types";
import { createBoard, deleteTheBoard, getAllBoards, getTheBoard } from "./operations";

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBoards.pending, (state) => {
        state.loading = true;
    }).addCase(getAllBoards.fulfilled, (state, action) => {
        state.loading = false;
        state.allBoards = action.payload.data;
    }).addCase(getTheBoard.pending, (state) => {
        state.loading = true;
    }).addCase(getTheBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.board = action.payload.data;
    })
      .addCase(createBoard.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBoard.fulfilled, (state, action) => {
        state.loading = false;
        console.log("createBoard action payload from slice", action.payload);
      })
      .addCase(createBoard.rejected, (state) => {
        state.loading = false;
        console.log("error in createBoard");
      }).addCase(deleteTheBoard.pending, (state) => {
        state.loading = true;
    }).addCase(deleteTheBoard.fulfilled, (state, action) => {
        state.loading = false;
        state.allBoards.filter(el => el._id !== action.payload.data.boardId);
    });
  },
});

export default slice.reducer;