// import css from "./Board.module.css";
import { useAppSelector } from "../../hooks/redux";
import { selectTheBoard } from "../../redux/boards/selectors";
import Board from "../../components/Board/Board";
import NoBoard from "../../components/noBoard/NoBoard";

const BoardPage = () => {
  const boardInfo = useAppSelector(selectTheBoard);

  return <div className="container">
    {
      boardInfo ? (
    <Board boardInfo={boardInfo} />
  ) : (
    <NoBoard/>
  )
    }
  </div>
   
};

export default BoardPage;
