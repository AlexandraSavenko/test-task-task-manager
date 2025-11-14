import { useDraggable } from '@dnd-kit/core';
import type { Task } from '../../types/types'
import css from './TaskCard.module.css'

interface TaskCardProp {
    task: Task;
}
const TaskCard = ({task}: TaskCardProp) => {
    const { attributes, listeners, setNodeRef, transform} = useDraggable({
        id: task.id
    })

    const style = transform ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`
    } : undefined;
  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style} className={css.wrap}>
      <h3 className={css.title}>{task.title}</h3>
      <p className={css.description}>{task.description}</p>
    </div>
  )
}

export default TaskCard
