import React from "react";
import { Button } from "react-bootstrap";
import Dairy from "./products/Dairy";
function Home() {
  return (
    <>
    <div className="card-container">
      <div className="card-body">
        <div className="heading">
          <h1>Paan Corner</h1>
        </div>
        <div className="card-text">
          <h2>Your favourite paan shop is now online</h2>
        </div>
        <Button className="btn-shop" variant="primary">Shop Now</Button>
      </div>
    </div>
    <Dairy />
    </>
  );
}

export default Home;
