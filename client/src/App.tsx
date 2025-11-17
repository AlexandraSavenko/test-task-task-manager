import { Suspense, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Board from "./pages/board/Board";
import BoardForm from "./components/BoardForm/BoardForm";
import { useSelector } from "react-redux";
import { selectTheBoard } from "./redux/boards/selectors";



function App() {
  const board = useSelector(selectTheBoard);
  useEffect(() => {console.log(board)}, [board])
  return <Layout>{
    <Suspense>
      <Routes>
        <Route path="/" element={<Board/>}/>
        <Route path="/form" element={<BoardForm/>} />
      </Routes>
    </Suspense>
    }
  </Layout>;
}

export default App;
