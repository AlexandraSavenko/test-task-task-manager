import { useState } from "react";
import "./App.css";
import type { Column, Task } from "./types/types";
import ColumnEl from "./components/Column/Column";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";

const COLUMNS: Column[] = [
  { id: "column-TODO", title: "To Do" },
  { id: "column-IN_PROGRESS", title: "In Progress" },
  { id: "column-DONE", title: "Done" },
];

const TASKS: Task[] = [
  { id: "task-1", title: "do it", description: "just do it", status: "TODO" },
  {
    id: "task-2",
    title: "do it",
    description: "just do it",
    status: "IN_PROGRESS",
  },

  { id: "task-3", title: "do it", description: "just do it", status: "DONE" },
];
function App() {
  const [tasks, setTasks] = useState<Task[]>(TASKS);
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    console.log("active", active);
    console.log("over", over);
    
    const taskId = active.id as string;
    const NewStatus = over.id as Task["status"];

    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: NewStatus } : task
      )
    );
  };
  return (
    <div className="taskMan">
      <div className=".outerWrap">
        <p>hello task manager</p>
        <div className="wrap">
          <DndContext onDragEnd={handleDragEnd}>
            {COLUMNS.map((column) => (
              <ColumnEl
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => task.status === column.id)}
              />
            ))}
          </DndContext>
        </div>
      </div>
    </div>
  );
}

export default App;
