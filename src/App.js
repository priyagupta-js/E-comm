import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import {ReactDOM} from "react-dom/client";
import Header from "../src/components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
    <Header />
    <Home />
    </div>
  );
}

export default App;
