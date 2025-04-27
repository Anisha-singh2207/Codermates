import React from 'react';
import './MissionSection.css';

const MissionSection = () => {
  return (
    <div className="mission-container">
      <div className="mission-text">
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-description">
          Our mission is to empower students with knowledge, foster creativity, and instill a passion for learning
          that goes beyond textbooks. We aim to nurture the leaders and innovators of tomorrow who will contribute
          to society's progress.
        </p>
      </div>
      <div className="mission-image">
        <img
          src="https://assets.storydoc.com/8011fa118d5708e6/4102a263-f069-404a-a680-405cc4b78c49" // replace this with your image link
          alt="Our mission"
        />
      </div>
    </div>
  );
};

export default MissionSection;
