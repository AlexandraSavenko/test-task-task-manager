import TaskCollection from "../db/models/Tasks";
import { createTaskPayload, PatchTaskPayload, UpdateTaskParams } from "../types/tasks";

export const getTasks = async (boardId: string) =>
  TaskCollection.find({ boardId });

export const addTask = (payload: createTaskPayload, boardId: string) =>
  TaskCollection.create({boardId, ...payload});

export const updateTask = async ({
  taskId,
  boardId,
  payload,
  options = {},
}: UpdateTaskParams) => {
    const finalPayload = {
        boardId,
        ...payload
    }
  const rawResult = await TaskCollection.findOneAndUpdate(
    { _id: taskId },
    { $set: finalPayload },
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

export const updateTaskPartial = async (taskId: string, updateData: PatchTaskPayload) => {
  const updatedTask = await TaskCollection.findByIdAndUpdate(
    taskId,
    updateData,
    {new: true, runValidators: true}
  );
  return updatedTask;
}
export const deleteTask = (taskId: string) =>
  TaskCollection.findOneAndDelete({ _id: taskId });
