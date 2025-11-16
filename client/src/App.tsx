import { Suspense } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Board from "./pages/board/Board";



function App() {
  
  return <Layout>{
    <Suspense>
      <Routes>
        <Route path="/" element={<Board/>}/>
      </Routes>
    </Suspense>
    }
  </Layout>;
}

export default App;
