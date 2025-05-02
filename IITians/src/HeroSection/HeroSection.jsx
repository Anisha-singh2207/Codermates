import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <img
          src="https://assets.storydoc.com/b4804fc30975071653e363e0b4a62ef0/a2c4f8d5-50f9-40f4-9e65-39e14f1ad075" // Replace with your actual image path
          alt="Graduation celebration"
          className="hero-image"
        />
      </div>
      <div className="hero-right">
        <img
          src="https://asset.brandfetch.io/idMLh9tK6A/idINld25VI.png" // Replace with your logo image path
          alt="IITian's Academy Logo"
          className="hero-logo"
        />
        <h2><strong>Empowering</strong> Future Engineers and Doctors</h2>
        <p>Welcome to IITian's family</p>
      </div>
    </div>
  );
};

export default HeroSection;