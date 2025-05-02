// FooterSection.jsx
import React from 'react';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <p><span className="icon">📍</span> Mumbai, Maharashtra, India</p>
        <p><span className="icon">📞</span> +91 7977903199</p>
        <p><span className="icon">✉</span> iitiansacademymr@gmail.com</p>
      </div>
      <div className="footer-right">
        <img
          src="https://asset.brandfetch.io/idMLh9tK6A/idINld25VI.png" // Replace with your actual logo URL
          alt="IITian's Academy Logo"
          className="footer-logo"
        />
      </div>
    </div>
  );
};

export default FooterSection;
