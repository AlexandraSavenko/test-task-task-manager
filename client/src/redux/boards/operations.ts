import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/axios";
import type { BoardFormType, BoardType, TaskType } from "../../types/types";

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

export const editBoard = createAsyncThunk(
  "boards/editBoard",
  async ({
    editedBoard,
    boardId,
  }: {
    editedBoard: BoardFormType;
    boardId: string;
  }) => {
    const res = await api.put(`/boards/${boardId}`, editedBoard);
    return res.data.data;
  }
);
export const deleteTheBoard = createAsyncThunk(
  "boards/deleteById",
  async (boardId: string) => {
    const res = await api.delete(`/boards/${boardId}`);
    return res.data;
  }
);

export const createTask = createAsyncThunk(
  "boards/addTask",
  async ({ newTask, boardId }: { newTask: TaskType; boardId: string }) => {
    const res = await api.post(`/boards/${boardId}/tasks`, newTask);
    return res.data.data;
  }
);

export const deleteTask = createAsyncThunk(
  "boards/deleteTask",
  async ({ boardId, taskId }: { boardId: string; taskId: string }) => {
    const res = await api.delete(`/boards/${boardId}/tasks/${taskId}`);
    return res.data.data;
  }
);

export const editTask = createAsyncThunk(
  "boards/editTask",
  async ({
    boardId,
    taskId,
    editedTask,
  }: {
    boardId: string;
    taskId: string;
    editedTask: TaskType;
  }) => {
    const res = await api.put(`/boards/${boardId}/tasks/${taskId}`, {
      ...editedTask,
      boardId,
    });
    return res.data.data;
  }
);

export const patchTaskStatus = createAsyncThunk(
  "boards/patchTask",
  async ({
    boardId,
    taskId,
    update,
  }: {
    boardId: string;
    taskId: string;
    update: {status: string};
  }) => {
    console.log("new status", update)
    const res = await api.patch(`/boards/${boardId}/tasks/${taskId}`, {
      update
    })
    console.log(res.data.data)
    return res.data.data;
  }
);
