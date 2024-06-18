import React from "react";
// import ReactCardSlider from 'react-card-slider-component';
// import amul from "../../../public/assets/amul_cheese";
// import products from "./products";


function Dairy (props){
    return(
      // <div className="dairy-container">
      <div className="card">
      <div className="image"> 
        <img src={props.img} alt={props.alt} />
        </div>
        <div className="title">
        <p>{props.name}</p>
        </div>
        <div className="quantity">
        <p>{props.weight}</p>
        </div>
        <div className="price">
        <p>{props.rupees}{props.price}</p>
        </div>
        <div className="Cart">
          <button>{"Add to cart"}</button>
        </div>

      </div>
          
      /* </div>   */
    );
    }
  

export default Dairy ;