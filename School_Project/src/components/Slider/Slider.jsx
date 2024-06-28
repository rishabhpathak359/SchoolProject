import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import your CSS file for styling

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="slider-container">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide flex">
            <img className ="object-cover" src={image} alt={`Slide ${index}`} />
            <h1>Sampel text</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
