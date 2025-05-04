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
      description: "Our IIT-JEE coaching program is designed to provide students with the knowledge and skills needed to excel in the highly competitive entrance exams. With experienced faculty and comprehensive study materials, we ensure that our students are well-prepared for success.",
      successRate: "95%",
      duration: "2 Years",
      image: "https://assets.storydoc.com/8011fa118d5708e6/01f36ff0-bcab-4bea-be3f-777d406837c6",
    },
    neet: {
      title: "NEET Coaching",
      description: "Our NEET coaching program offers specialized training for aspiring medical professionals. We provide expert guidance, regular assessments, and personalized attention to help students achieve their goals and secure admission to top medical colleges.",
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
            className={`tab ${selectedTab === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="content-section">
        <div className="text-content">
          <h3>{content[selectedTab].title}</h3>
          <p>{content[selectedTab].description}</p>
          <p><strong>Success Rate:  {content[selectedTab].successRate}</strong></p>
          <p><strong>Duration:  {content[selectedTab].duration}</strong></p>
        </div>
        <div className="image-content">
          <img src={content[selectedTab].image} alt={content[selectedTab].title} />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
