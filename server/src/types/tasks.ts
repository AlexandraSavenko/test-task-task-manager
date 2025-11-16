export interface createTaskPayload {
    title: string;
    description: string;
}

export interface UpdateTaskParams {
    taskId: string;
    boardId: string;
    payload: createTaskPayload;
    options: {}
}