import { Suspense, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import BoardPage from "./pages/boardPage/BoardPage";
import toast, { Toaster } from "react-hot-toast";
import { useAppSelector } from "./hooks/redux";
import { selectError } from "./redux/boards/selectors";



function App() {
  const error = useAppSelector(selectError);
  useEffect(()=>{
    if(error){
      toast.error(error)
    }
  },[error])
  return <> 
  <Toaster position="top-center"/>
  <Layout>{
    <Suspense>
      <Routes>
        <Route path="/" element={<BoardPage/>}/>
      </Routes>
    </Suspense>
    }
  </Layout>;
  </>
}

export default App;
