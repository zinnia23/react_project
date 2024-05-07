import React, { useState, useEffect } from 'react';
import '../styles/ImageSlider.css'; // Import your CSS file for styling

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 2));
    }, 3000);

    return () => clearInterval(interval); 
  }, [images.length]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 3 ? 0 : prevIndex + 1
    );
  };

  const translateXValue = -currentIndex * (100 / 3);

  return (
    <div className="slider-container">
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(${translateXValue}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <a href={image.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={image.src}
                  alt={`Slide ${index}`}
                  className={`slider-image ${index === 1 ? 'center' : ''}`}
                />
              </a>
            </div>
          ))}
        </div>
        <button className="slider-control prev" onClick={goToPreviousSlide}>
          &#10094;
        </button>
        <button className="slider-control next" onClick={goToNextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
