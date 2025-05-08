import React, { useEffect } from 'react';
import './JouneyTimeline.css';

const journeyData = [
  { year: '2015', title: 'Founded', description: 'IITians Academy was established with a vision to provide quality education.' },
  { year: '2017', title: 'First Branch', description: 'Opened our first branch in Mumbai, expanding our reach.' },
  { year: '2018', title: 'Course Expansion', description: 'Introduced NEET coaching to cater to aspiring medical students.' },
  { year: '2020', title: 'Digital Learning', description: 'Launched online courses to reach students nationwide.' },
];

const JourneyTimeline = () => {
  useEffect(() => {
    const handleScroll = () => {
      const center = window.innerHeight / 2;
      const items = document.querySelectorAll('.timeline-item');

      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(center - itemCenter);

        const maxDistance = window.innerHeight / 2;
        const opacity = 1 - Math.min(distance / maxDistance, 1);

        item.style.opacity = opacity;
        item.style.transform = `translateY(${50 * (1 - opacity)}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial run

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="timeline-container">
      <h1 className="timeline-heading">OUR GLORIOUS JOURNEY</h1>
      <div className="timeline">
        {journeyData.map((item, index) => (
          <div 
            id={`journey-item-${index}`}
            className="timeline-item"
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
