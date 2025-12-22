import React from 'react'

import './HomeBody.css'
import { imageLinks } from '../../assets/S3Bucket/5beansAssets';

const HomeBody = () => {
const images = [
  imageLinks.coffeeBag,
  imageLinks.flatwhite,
  imageLinks.cookie,
  imageLinks.coconutBalls,
  imageLinks.pancake,
  imageLinks.fondant,
  imageLinks.lebaneseCoffee,
  imageLinks.peanutButterJar,
  imageLinks.peanutButterJarSmall,
  imageLinks.milkshakeStrawberry,
  imageLinks.datesBalls,
  imageLinks.peanutButterBar,
];

  
    return (
      <div className="album-container">
        <img src='https://s3.us-east-1.amazonaws.com/cdn.betdevelopers.com/images/assets/images/Scratched-icon.png'></img>
        <div className="masonry">
        {images.map((img, index) => (
          <img  rel="preload" src={img} alt={`Photo ${index + 1}`} key={index} className="masonry-img" />
        ))}
      </div>
      </div>
    );
  };
  
  export default HomeBody;
