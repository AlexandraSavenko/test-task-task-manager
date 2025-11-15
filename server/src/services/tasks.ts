import TaskCollection from "../db/models/Tasks";
import { createTaskPayload } from "../types/tasks";


export const getTasks = async (boardId: string) => TaskCollection.find({boardId});

export const addTask = (payload: createTaskPayload) => TaskCollection.create(payload)