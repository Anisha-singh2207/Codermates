import React from 'react';
import './CoreValues.css'; // We'll create this CSS file

const CoreValues = () => {
  const values = [
    {
      icon: '⭐', 
      title: 'Excellence', 
      description: 'Striving for the highest standards in education and guidance.'
    },
    {
      icon: '🛡', 
      title: 'Integrity', 
      description: 'Upholding honesty and transparency in all our interactions.'
    },
    {
      icon: '💡', 
      title: 'Innovation', 
      description: 'Encouraging creative solutions and forward-thinking approaches.'
    },
    {
      icon: '❤', 
      title: 'Commitment', 
      description: 'Dedicated to student success and continuous improvement.'
    },
  ];

  return (
    <div className="core-values-container">
      <h1 className="core-values-heading">Core Values</h1>
      <div className="core-values-features">
        {values.map((value, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{value.icon}</div>
            <h3 className="feature-title">{value.title}</h3>
            <p className="feature-description">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;