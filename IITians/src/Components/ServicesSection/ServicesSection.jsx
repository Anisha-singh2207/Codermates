import React, { useState } from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const [selectedTab, setSelectedTab] = useState('foundation');

  const tabs = [
    { id: 'iitjee', label: 'IIT-JEE Coaching' },
    { id: 'neet', label: 'NEET Coaching' },
    { id: 'foundation', label: 'Foundation Courses' },
  ];

  const content = {
    iitjee: {
      title: "IIT-JEE Coaching",
      description: "Our IIT-JEE coaching prepares students with in-depth concepts and rigorous practice sessions for top ranks.",
      successRate: "95%",
      duration: "2 Years",
      image: "https://assets.storydoc.com/8011fa118d5708e6/01f36ff0-bcab-4bea-be3f-777d406837c6",
    },
    neet: {
      title: "NEET Coaching",
      description: "Our NEET program is designed to strengthen core medical concepts and ensure success in NEET exams.",
      successRate: "90%",
      duration: "2 Years",
      image: "https://assets.storydoc.com/8011fa118d5708e6/df19e4fb-5c87-4060-9251-91c48b382ec3",
    },
    foundation: {
      title: "Foundation Courses",
      description: "Our foundation courses for grades VIII to X are designed to build a strong academic base. We focus on core subjects and critical thinking skills, preparing students for future challenges and competitive exams.",
      successRate: "92%",
      duration: "3 Years",
      image: "https://assets.storydoc.com/8011fa118d5708e6/2b392208-0946-4194-941c-bb8065c8372e",
    }
  };

  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={selectedTab === tab.id ? "tab active" : "tab"}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="content-section">
        <div className="text-content">
          <h3>{content[selectedTab].title}</h3>
          <p>{content[selectedTab].description}</p>
          <p><strong>Success Rate:</strong> {content[selectedTab].successRate}</p>
          <p><strong>Duration:</strong> {content[selectedTab].duration}</p>
        </div>
        <div className="image-content">
          <img src={content[selectedTab].image} alt={content[selectedTab].title} />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
