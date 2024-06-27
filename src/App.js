import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
// import {ReactDOM} from "react-dom/client";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";

function App() {
  return (
    <div className="App">
    {/* <Routes> */}
    {/* <Routes path="/" element={<Home />}/> */}
    <Home />
    {/* </Routes> */}
    </div>
  );
}

export default App;
