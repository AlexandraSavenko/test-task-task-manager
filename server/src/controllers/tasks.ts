import { Request, Response, NextFunction } from "express";
import * as TasksControllers from "../services/tasks";


export const getTasksController = async (req: Request, res: Response) => {
    const {boardId} = req.params;
    console.log("getTasksController: req.params -- ", req.params)
    const data = await TasksControllers.getTasks(boardId);
    if(!data){
        console.log("something's not right, no data")
    }
    res.status(200).json({
        status: 200,
        message: "Success",
        data
    })
}
export const addTaskController = async (req: Request, res: Response) => {
    const data = await TasksControllers.addTask(req.body);

    res.status(201).json({
        status: 201,
        message: "Success",
        data
    })
}

export const deleteTaskController = async (req: Request, res: Response) => {
    const { taskId } = req.params;
    console.log("deleteTaskController", req.params)
    const data = await TasksControllers.deleteTask(taskId)
    if(!data){
        console.log("something's not right, no data")
    }
    res.status(204).send()
}