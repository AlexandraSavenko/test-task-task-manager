import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/axios";
import type { BoardType } from "../../types/types";

export const createBoard = createAsyncThunk("boards/createBoard", async (newBoard: BoardType) => {
const res = await api.post("/boards", newBoard);
console.log(res);
return res.data;
})