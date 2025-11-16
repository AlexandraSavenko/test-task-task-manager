export interface createTaskPayload {
    title: string;
    description: string;
}

export interface UpdateTaskParams {
    taskId: string;
    payload: createTaskPayload;
    options: {}
}