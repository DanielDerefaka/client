import "./App.css";
import React from "react";
import {Routes, Route} from "react-router-dom"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Quote from "./pages/Quote";


function App() {
  return (
    <div className="mt-[10%] w-[100%] ">
    <Routes>
<Route path="/"  element={<Home/>}/>
<Route path="/register"  element={<Register/>}/>
<Route path="/login"  element={<Login/>}/>
<Route path="/quote"  element={<Quote/>}/>
    </Routes>
 
    </div>
  );
}

export default App;
