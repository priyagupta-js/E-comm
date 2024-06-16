import React from "react";
import ReactCardSlider from 'react-card-slider-component';

function Dairy (){
  const slides = [
    {
      image:"../../../src/assets/bread_slice.png" ,
      title:"Amul Pure Milk Cheese Slices",
      quantity : "200g" ,
      Price : "₹ 141",
      button : "Add",
    }
  ]
    return(
      <div className="dairy-container">
          <h2>Dairy ,Breads & Eggs</h2>
          <div>

<ReactCardSlider slides={slides}/>
          </div>
      </div>  
    );
    }

    const slides = [
      {image:"../../../src/assets/bread_slice.png",title:"This is a title",description:"This is a description"},
      {image:"",title:"This is a second title",description:"This is a second description"},
      {image:"",title:"This is a third title",description:"This is a third description"},
      {image:"",title:"This is a fourth title",description:"This is a fourth description"},
      {image:"",title:"This is a fifth title",description:"This is a fifth description"},
      {image:"",title:"This is a sixth title",description:"This is a sixth description"},
      {image:"",title:"This is a seventh title",description:"This is a seventh description"},
  ]
  

export default Dairy ;