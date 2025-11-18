import { useDraggable } from '@dnd-kit/core';
import type { TaskType } from '../../types/types'
import css from './TaskCard.module.css'
import { useEffect } from 'react';

interface TaskCardProp {
    task: TaskType;
}
const TaskCard = ({task}: TaskCardProp) => {
    const { attributes, listeners, setNodeRef, transform} = useDraggable({
        id: task._id || ""
    })

    const style = transform ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`
    } : undefined;
    useEffect(() => {console.log(task)}, [task])
  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style} className={css.wrap}>
      <h3 className={css.title}>{task.title}</h3>
      <p className={css.description}>{task.description}</p>
    </div>
  )
}

export default TaskCard
