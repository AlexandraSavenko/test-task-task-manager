import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import type { ColumnType, TaskType } from '../../types/types';
import css from './Board.module.css'
import { useState } from 'react';
import Column from '../../components/Column/Column';
const COLUMNS: ColumnType[] = [
  { id: "column-TODO", title: "To Do" },
  { id: "column-IN_PROGRESS", title: "In Progress" },
  { id: "column-DONE", title: "Done" },
];

const TASKS: TaskType[] = [
  { id: "task-1", title: "do it now", description: "just do it", status: "TODO" },
  {
    id: "task-2",
    title: "do it",
    description: "just do it",
    status: "IN_PROGRESS",
  },

  { id: "task-3", title: "do it", description: "just do it", status: "DONE" },
];
const Board = () => {
    const [tasks, setTasks] = useState<TaskType[]>(TASKS);
    console.log(TASKS)
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    console.log("active", active);
    console.log("over", over);
    
    const taskId = active.id as string;
    const NewStatus = over.id as TaskType["status"];

    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: NewStatus } : task
      )
    );
  };
  return (
    <div className={css.taskMan}>
      <div className=".outerWrap">
        <p>hello task manager</p>
        <div className={css.wrap}>
          <DndContext onDragEnd={handleDragEnd}>
            {COLUMNS.map((column) => (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => task.status === column.id)}
              />
            ))}
          </DndContext>
        </div>
      </div>
    </div>
  )
}

export default Board
