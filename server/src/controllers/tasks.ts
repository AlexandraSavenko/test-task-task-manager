import { Request, Response, NextFunction } from "express";
import * as TasksServises from "../services/tasks";

export const getTasksController = async (req: Request, res: Response) => {
  const { boardId } = req.params;
  console.log("getTasksController: req.params -- ", req.params);
  const data = await TasksServises.getTasks(boardId);
  if (!data) {
    console.log("something's not right, no data");
  }
  res.status(200).json({
    status: 200,
    message: "Success",
    data,
  });
};
export const addTaskController = async (req: Request, res: Response) => {
    const {boardId} = req.params;
  const data = await TasksServises.addTask(req.body, boardId);

  res.status(201).json({
    status: 201,
    message: "Success",
    data,
  });
};

export const updateTaskController = async (req: Request, res: Response) => {
  const { taskId } = req.params;
  const {boardId} = req.params;
  console.log("updataTaskController", req.params);
  const result = await TasksServises.updateTask({
    taskId,
    boardId,
    payload: req.body,
    options: { upsert: true },
  });
  const status = result?.isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: result?.isNew ? "Successfully created task" : "Successfully updated task",
    data: result?.data,
  });
};
export const deleteTaskController = async (req: Request, res: Response) => {
  const { taskId } = req.params;
  console.log("deleteTaskController", req.params);
  const data = await TasksServises.deleteTask(taskId);
  if (!data) {
    console.log("something's not right, no data");
  }
  res.status(204).send();
};
