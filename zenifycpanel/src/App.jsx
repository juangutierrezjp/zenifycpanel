import { Route, Routes } from "react-router";
import './App.css'
import Homepanel from "./components/homepanel";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepanel />} />

      </Routes>
     
    </>
  )
}

export default App
