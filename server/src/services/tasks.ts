import TaskCollection from "../db/models/Tasks";
import { createTaskPayload, UpdateTaskParams } from "../types/tasks";

export const getTasks = async (boardId: string) =>
  TaskCollection.find({ boardId });

export const addTask = (payload: createTaskPayload) =>
  TaskCollection.create(payload);

export const updateTask = async ({
  taskId,
  payload,
  options = {},
}: UpdateTaskParams) => {
  const rawResult = await TaskCollection.findOneAndUpdate(
    { _id: taskId },
    { $set: payload },
    {
      ...options,
      includeResultMetadata: true,
      returnDocument: "after",
    }
  );
  if (!rawResult || !rawResult.value) return null;
  return {
    data: rawResult.value,
    isNew: Boolean(rawResult.lastErrorObject?.upserted),
  };
};

export const deleteTask = (taskId: string) =>
  TaskCollection.findOneAndDelete({ _id: taskId });
