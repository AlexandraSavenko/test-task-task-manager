import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/axios";
import type { BoardType } from "../../types/types";


export const getAllBoards = createAsyncThunk("boards/getAll", async () => {
    const res = await api.get("/boards");
    return res.data;
})

export const getTheBoard = createAsyncThunk("boards/getById", async(boardId: string) => {
    const res = await api.get(`/boards/${boardId}`);
    return res.data;
})
export const createBoard = createAsyncThunk("boards/createBoard", async (newBoard: BoardType) => {
const res = await api.post("/boards", newBoard);
console.log(res);
return res.data;
})
export const deleteTheBoard = createAsyncThunk("boards/deleteById", async(boardId: string) => {
    const res = await api.delete(`/boards/${boardId}`);
    return res.data;
})