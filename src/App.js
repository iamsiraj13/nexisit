import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Attendence from "./components/Attendence";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Signup />} />
          <Route exact path="/attendence" element={<Attendence />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
