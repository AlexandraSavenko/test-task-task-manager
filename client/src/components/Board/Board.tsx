// import { DndContext } from '@dnd-kit/core';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { selectTasks } from "../../redux/boards/selectors";
import { handleDeleteBoard, handleDragEnd } from "../../utils/functions";
import Button from "../Button/Button";
import css from "./Board.module.css";
import Column from "../Column/Column";
import type { BoardType } from "../../types/types";
import { setCodeError, setModalOpen } from "../../redux/boards/slice";
import { closestCorners, DndContext, type DragEndEvent } from "@dnd-kit/core";

interface BoardProps {
  boardInfo: BoardType;
}
const Board = ({ boardInfo }: BoardProps) => {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  const handleDragEndWrapper = (event: DragEndEvent) => {
    if (!boardInfo._id) {
      dispatch(setCodeError("Board Id is missing"));
      return;
    }
    handleDragEnd(event, boardInfo._id, dispatch);
  };
  return (
    <div className={css.taskMan}>
      <div>
        <div className={css.boardMenu}>
          <p>{boardInfo.name}</p>
          <Button onClick={() => handleDeleteBoard(boardInfo._id, dispatch)}>
            Delete Board
          </Button>
          <Button onClick={() => dispatch(setModalOpen("editBoard"))}>
            Edit Board
          </Button>
          <Button onClick={() => dispatch(setModalOpen("createTask"))}>
            Add Task
          </Button>
        </div>

        <div className={css.wrap}>
          <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEndWrapper}>
            {boardInfo?.columns.map((column) => (
              <Column
                key={column._id}
                column={column}
                tasks={tasks.filter((task) => task.status === column._id)}
              />
            ))}
          </DndContext>
        </div>
      </div>
    </div>
  );
};

export default Board;
