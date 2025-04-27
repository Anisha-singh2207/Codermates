import React, { useState } from 'react';
import './Carsouel.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='carousel-container'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />

      <div className="slide-container">
        {data.map((item, idx) => (
          <img
            key={idx}
            src={item.src}
            alt={item.alt}
            className={`slide ${idx === currentIndex ? 'active' : 'inactive'}`}
          />
        ))}
      </div>

      <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />

      {/* Optional indicators */}
      
      <div className='indicators'>
        {data.map((_, idx) => (
          <button
            className={`indicator ${idx === currentIndex ? 'active' : ''}`}
            key={idx}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div> 
     
    </div>
  );
};

export default Carousel;
