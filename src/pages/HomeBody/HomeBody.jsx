import React from 'react'

import './HomeBody.css'
import { imageLinks } from '../../assets/S3Bucket/5beansAssets';

const HomeBody = () => {
const images = [
  imageLinks.coffeeBag,
    imageLinks.milkshakeStrawberry,

  imageLinks.pancake,
  imageLinks.lebaneseCoffee,
    imageLinks.flatwhite,

  imageLinks.datesBalls,
];

  
    return (
      <div className="album-container">
        <div className="masonry">
        {images.map((img, index) => (
          <img  rel="preload" src={img} alt={`Photo ${index + 1}`} key={index} className="masonry-img" />
        ))}
      </div>
      </div>
    );
  };
  
  export default HomeBody;
