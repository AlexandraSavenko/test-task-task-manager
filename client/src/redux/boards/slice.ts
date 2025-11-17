import { createSlice } from "@reduxjs/toolkit";
import type { BoardsInitStateTypes } from "../../types/types";



const boardsInitState: BoardsInitStateTypes = {
    board: null,
    tasks: [],
    loading: false,
    error: false
}
export const slice = createSlice({
name: "board",
initialState: boardsInitState,
reducers: {},
// extraReducers: builder => {
//     builder.addCase()
// }
})