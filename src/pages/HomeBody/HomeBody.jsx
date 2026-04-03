import React, { useState, useEffect } from 'react'
import './HomeBody.css'
import { imageLinks } from '../../assets/S3Bucket/5beansAssets';

const HomeBody = () => {
  const allImages = [
    imageLinks.coffeeBag,
    imageLinks.milkshakeStrawberry,
    imageLinks.img1,
    imageLinks.img2,
    imageLinks.img3,
    imageLinks.pancake,
    imageLinks.datesBalls,
    imageLinks.lebaneseCoffee,
    imageLinks.flatwhite,
    imageLinks.img4,
    imageLinks.img5,
    imageLinks.img6,
  ];

  const [images, setImages] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width <= 768;
      setIsMobile(mobile);
      
      if (!mobile) {
        // Desktop: Show all images, no button needed
        setImages(allImages);
        setShowAll(true);
      } else if (!showAll) {
        // Mobile and not in "show all" mode
        if (width <= 480) {
          setImages(allImages.slice(0, 6));
        } else {
          setImages(allImages.slice(0, 9));
        }
      }
    };

    handleResize(); // Call on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [showAll]);

  const showMoreImages = () => {
    setImages(allImages);
    setShowAll(true);
  };

  const showLessImages = () => {
    const width = window.innerWidth;
    if (width <= 480) {
      setImages(allImages.slice(0, 6));
    } else if (width <= 768) {
      setImages(allImages.slice(0, 9));
    }
    setShowAll(false);
  };

  // Only show button on mobile AND if there are more than 6 images
  const showButton = isMobile && allImages.length > 6;

  return (
    <div className="album-container">
      <div className="masonry">
        {images.map((img, index) => (
          <img 
            rel="preload" 
            src={img} 
            alt={`Photo ${index + 1}`} 
            key={index} 
            className="masonry-img" 
            loading="lazy"
          />
        ))}
      </div>
      
      {showButton && (
        <div className="view-more-container">
          {!showAll ? (
            <button 
              className="view-more-btn"
              onClick={showMoreImages}
            >
              Show More Photos
            </button>
          ) : (
            <button 
              className="view-more-btn show-less"
              onClick={showLessImages}
            >
              Show Less Photos
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default HomeBody;