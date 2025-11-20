import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getAllBoards, getTheBoard } from "../../redux/boards/operations";
import { selectAllBoards } from "../../redux/boards/selectors";
import css from "./SelectBoard.module.css";
import { selectNoBoard, setCodeError } from "../../redux/boards/slice";

interface SelectBoardProps {
  onClose: () => void;
}
const SelectBoard = ({onClose}: SelectBoardProps) => {
  const dispatch = useAppDispatch();
  const allBoards = useAppSelector(selectAllBoards);
  useEffect(() => {
    dispatch(getAllBoards())  
  }, [])
  useEffect(()=>{
    if(!allBoards){
    dispatch(setCodeError("Back is asleep. Please reload to wake it up."))
  }
  },[allBoards, dispatch])
  
  const handleChangeBoard = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const boardId = event.target.value;
    if(boardId === "noBoard"){
        dispatch(selectNoBoard())
        return;
    }
    dispatch(getTheBoard(boardId));
    onClose()
  };
  return (
    allBoards.length > 0 ? <div className={css.selectBoardWrap}>
      <select name="selectBoard" onChange={handleChangeBoard}>
        <option value="noBoard">Select board</option>
        {allBoards.map((board) => (
          <option key={board._id} value={board._id}>{board.name}</option>
        ))}
      </select>
    </div> : <p>Sorry, the board list is not available</p>
  );
};

export default SelectBoard;
