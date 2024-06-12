import React from "react";
import {ReactDOM} from "react-dom/client";
import Header from "../src/components/Header";
import ListedItemBar  from "../src/components/ListedItemBar";
import Mobile from "./components/products/Mobiles";

function App() {
  return (
    <div className="App">
    <Header />
    <ListedItemBar />
    <Mobile/>
    </div>
  );
}

export default App;
