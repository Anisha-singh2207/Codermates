import React from 'react';
import { Link } from 'react-router-dom';
import './Readmore.css';

const Readmore = () => {
  return (
    <div className="readmore-container">
      <Link to="/about" className="readmore-btn">Read More</Link>
    </div>
  );
};

export default Readmore;
