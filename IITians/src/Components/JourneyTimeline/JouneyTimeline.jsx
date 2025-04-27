import React, { useEffect, useState } from 'react';
import './JouneyTimeline.css';


const journeyData = [
  { year: '2015', title: 'Founded', description: 'IITians Academy was established with a vision to provide quality education.' },
  { year: '2017', title: 'First Branch', description: 'Opened our first branch in Mumbai, expanding our reach.' },
  { year: '2018', title: 'Course Expansion', description: 'Introduced NEET coaching to cater to aspiring medical students.' },
  { year: '2020', title: 'Digital Learning', description: 'Launched online courses to reach students nationwide.' },
];

const JourneyTimeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const updatedVisibleItems = journeyData.map((_, index) => {
        const element = document.getElementById(`journey-item-${index}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top + window.scrollY < scrollPosition;
          // 100px before reaching
        }
        return false;
      });
      setVisibleItems(updatedVisibleItems);
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // run initially
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="timeline-container">
      <h1 className="timeline-heading">OUR GLORIOUS JOURNEY</h1>
      <div className="timeline">
        {journeyData.map((item, index) => (
          <div 
            id={`journey-item-${index}`}
            className={`timeline-item ${visibleItems[index] ? 'visible' : ''}`} 
            key={index}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h2>{item.year}</h2>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;
