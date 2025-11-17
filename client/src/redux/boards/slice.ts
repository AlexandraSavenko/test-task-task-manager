import { createSlice } from "@reduxjs/toolkit";
import type { BoardsInitStateTypes } from "../../types/types";
import { createBoard } from "./operations";

const boardsInitState: BoardsInitStateTypes = {
  board: null,
  tasks: [],
  loading: false,
  error: false,
};
export const slice = createSlice({
  name: "board",
  initialState: boardsInitState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default slice.reducer;