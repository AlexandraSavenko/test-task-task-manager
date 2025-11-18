import { Suspense, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTheBoard } from "./redux/boards/selectors";
import BoardPage from "./pages/boardPage/BoardPage";
// import Modal from "./components/modal/Modal";



function App() {
  const board = useSelector(selectTheBoard);
  useEffect(() => {console.log(board)}, [board])
  return <Layout>{
    <Suspense>
      <Routes>
        <Route path="/" element={<BoardPage/>}/>
        {/* <Route path="/modal" element={<Modal onClose={() => console.log("modal works")}>Modal</Modal>}/> */}
      </Routes>
    </Suspense>
    }
  </Layout>;
}

export default App;
