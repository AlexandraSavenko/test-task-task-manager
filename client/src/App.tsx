import { Suspense } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import BoardPage from "./pages/boardPage/BoardPage";
// import Modal from "./components/modal/Modal";



function App() {
  return <Layout>{
    <Suspense>
      <Routes>
        <Route path="/" element={<BoardPage/>}/>
      </Routes>
    </Suspense>
    }
  </Layout>;
}

export default App;
