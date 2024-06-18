import React from "react";
import { Button } from "react-bootstrap";
import products from "../components/products/products.js";
import Dairy from "./products/Dairy";

function Home() {

  // console.log(props);
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
<div><h2>Dairy ,Breads & Eggs</h2></div>
    <Dairy 
      img={products[0].imgURL}
      alt={products[0].alt}
      name={products[0].product_Name}
      rupees={products[0].rupees}
      price={products[0].price}
    />
     <Dairy 
      img={products[1].imgURL}
      alt={products[1].alt}
      name={products[1].product_Name}
      price={products[1].price}
    />
    </>
  );
}

export default Home;
