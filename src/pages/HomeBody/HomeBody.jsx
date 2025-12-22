import React from 'react'
import coffeeBag from "../../assets/food_del/frontend_assets/coffee-bag.jpeg";
import beansBag from "../../assets/food_del/frontend_assets/beansbag.png";

// import fullwidth_coffeebag from "../../assets/food_del/frontend_assets/fullwidth-coffee-bag.JPG";
import flatwhite from "../../assets/food_del/frontend_assets/FlatWhite.png";
import cookie from "../../assets/food_del/frontend_assets/doubleChocolateCookie.jpeg";
import coconutBalls from "../../assets/food_del/frontend_assets/coconutBalls.jpeg";
import pancake from "../../assets/food_del/frontend_assets/pancake.jpeg";
import fondant from "../../assets/food_del/frontend_assets/fondant.jpeg";
// import granola from "../../assets/food_del/frontend_assets/GranolaBreakfast.jpg";
import lebaneseCoffee from "../../assets/food_del/frontend_assets/lebaneseCoffee.jpeg";
import peanutButterJar from "../../assets/food_del/frontend_assets/peanutbutterJar.jpeg";
import peanutButterJarSmall from "../../assets/food_del/frontend_assets/peanutbutterJar.jpeg";
import milkshakeStrawberry from "../../assets/food_del/frontend_assets/StrawberryMilkshake.png";
import peanutButterBar from "../../assets/food_del/frontend_assets/PeanutButterBar.png";
import datesBalls from "../../assets/food_del/frontend_assets/dateBalls.jpeg";
import './HomeBody.css'

const HomeBody = () => {
    const images = [
      coffeeBag, 
      // beansBag, 
    //   fullwidth_coffeebag, 
    flatwhite,
    cookie , 
    coconutBalls,
    pancake ,
    fondant, 
    // granola, 
    lebaneseCoffee, 
    peanutButterJar,
    peanutButterJarSmall, 
    milkshakeStrawberry, 
    datesBalls,
     peanutButterBar,
    ];
  
    return (
      <div className="album-container">
        <div className="masonry">
        {images.map((img, index) => (
          <img src={img} alt={`Photo ${index + 1}`} key={index} className="masonry-img" />
        ))}
      </div>
      </div>
    );
  };
  
  export default HomeBody;
