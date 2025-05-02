import React from 'react';
import './WelcomeCEO.css';

const WelcomeCEO = () => {
  return (
    <div className="ceo-section">
      <h2>Welcome from the CEO</h2>
      <p>
        Welcome to the <strong>IITian’s Academy</strong> Brochure. As the CEO of IITian’s Academy, I am honored to share our organization’s achievements over the past year. Our commitment to excellence in education has empowered countless students to achieve their dreams.
      </p>
      <p>
        This brochure highlights our strategic locations, comprehensive courses, and the success stories of our students. We are dedicated to providing the best educational experience and preparing students for the challenges of IIT-JEE and NEET.
      </p>

      <div className="ceo-footer">
        <div className="ceo-text">
          <p>All the best,</p>
          <p><strong>MDD sir</strong></p>
          <p>Chief Executive Officer</p>
        </div>
        <img
          src="https://assets.storydoc.com/b4804fc30975071653e363e0b4a62ef0/ad62228c-3e41-4c8a-b600-0f2229fad120" // Replace with actual image address
          alt="CEO"
          className="ceo-img"
        />
      </div>
    </div>
  );
};

export default WelcomeCEO;