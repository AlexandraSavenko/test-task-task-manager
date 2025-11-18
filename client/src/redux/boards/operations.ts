import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/axios";
import type { BoardType, TaskType } from "../../types/types";

export const getAllBoards = createAsyncThunk("boards/getAll", async () => {
  const res = await api.get("/boards");
  return res.data;
});

export const getTheBoard = createAsyncThunk(
  "boards/getById",
  async (boardId: string) => {
    const board = await api.get(`/boards/${boardId}`);
    const tasks = await api.get(`/boards/${boardId}/tasks`);
    const res = {
      board: board.data.data,
      tasks: tasks.data.data,
    };
    return res;
  }
);
export const createBoard = createAsyncThunk(
  "boards/createBoard",
  async (newBoard: BoardType) => {
    const res = await api.post("/boards", newBoard);
    console.log(res);
    return res.data;
  }
);
export const deleteTheBoard = createAsyncThunk(
  "boards/deleteById",
  async (boardId: string) => {
    const res = await api.delete(`/boards/${boardId}`);
    return res.data;
  }
);

// export const getAllTasks = createAsyncThunk("boards/getTasks", async (boardId: string)=> {
//     const res = await api.get(`boards/${boardId}/tasks`)
//     return res.data.data;
// })

export const createTask = createAsyncThunk(
  "boards/addTask",
  async ({ newTask, boardId}: { newTask: TaskType; boardId: string }) => {
    const res = await api.post(`/boards/${boardId}/tasks`, newTask);
    return res.data.data;
  }
);
