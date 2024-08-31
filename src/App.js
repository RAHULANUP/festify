import React from "react";
import './App.css';

import { Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import Event from "./components/Event/Event";
import SignUp from "./components/SignUp/SignUp";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/event' element={<Event/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
