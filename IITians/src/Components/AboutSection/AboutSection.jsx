import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <h2 className="about-heading">About Us</h2>
        <p className="about-description">
          <strong>IITians Academy</strong> is dedicated to shaping the future of young aspirants by providing exceptional education and guidance. Our team of experienced educators is committed to helping students excel in competitive exams like IIT-JEE and NEET.
          <br /><br />
          <strong>We operate in multiple locations across Mumbai.</strong> 
        </p>
      </div>
      <div className="about-image">
        <img 
          src="https://assets.storydoc.com/b4804fc30975071653e363e0b4a62ef0/5874dce7-0d3b-4ddd-96bc-2e034a9d45d0" 
          alt="IITians Academy" 
        />
      </div>
    </div>
  );
};

export default AboutSection;
