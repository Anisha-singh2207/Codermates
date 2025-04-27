import React from 'react';
import './LocationSection.css';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const locations = [
  {
    city: "Nallasopara",
    address: "1st Floor, Roopa Co-Operative Housing Society, St. Depot Rd, Nallasopara West, Maharashtra 401203",
    phone: "‪+918530954777‬",
    email: "iitiansacademy.mr@gmail.com"
  },
  {
    city: "Borivali",
    address: "1st Floor, Bungalow No. 121/126, Opposite Gorai Bridge Bus Stop, Borivali West, Mumbai, Maharashtra 400091",
    phone: "‪+918530954777‬",
    email: "iitiansacademy.mr@gmail.com"
  },
  {
    city: "Kandivali",
    address: "1st Floor, Shree Laxmivadan Building, Iraniwadi Road No.2, Kandivali West, Mumbai 400067",
    phone: "‪+918530954777‬",
    email: "iitiansacademy.mr@gmail.com"
  },
];

const LocationsSection = () => {
  return (
    <div className="locations-section">
      <div className="locations-overlay">
        <h2 className="locations-title">Our Locations</h2>
        <div className="locations-cards">
          {locations.map((loc, index) => (
            <div key={index} className="location-card">
              <h3 className="city-name">{loc.city}</h3>
              <p className="address">{loc.address}</p>
              <div className="contact-info">
                <div className="contact-item">
                  <FaPhoneAlt className="icon" />
                  <a href={`tel:${loc.phone}`}>{loc.phone}</a>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="icon" />
                  <a href={`mailto:${loc.email}`}>{loc.email}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsSection;
