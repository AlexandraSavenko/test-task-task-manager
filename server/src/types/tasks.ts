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

export interface PatchTaskPayload {
    status?: string;
    title?: string;
    description?: string;
}