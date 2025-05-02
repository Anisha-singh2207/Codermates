import React from "react";
import "./GetInTouch.css";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const GetInTouch = () => {
  return (
    <section className="get-in-touch">
      <div className="get-in-touch-container">
        <div className="get-in-touch-left">
          <img
            src="https://imgs.search.brave.com/yhg23BYk5OUTFLHkXg1IC4WLpwueYNwfiXfmvXeoWGM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/MDAyMzAyOS9waG90/by9saWdodC1idWxi/LWlkZWFzLWNyZWF0/aXZlLWRpYWdyYW0t/Y29uY2VwdC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ZTUz/OHg4aTBKZU1VOWlK/VVZHS0xqYjNHWFdq/OWpUN250eXl4eXFM/bThvMD0"
            alt="Idea"
          />
        </div>
        <div className="get-in-touch-right">
          <h2>Let's Get in Touch!</h2>
          <p>
            We invite you to book a meeting with us to discuss how we can help
            you achieve your academic goals. Our team is here to support you
            every step of the way.
          </p>
          <p className="coordinator">
            Mr Subhash Mishra, Admissions Coordinator
          </p>
          <div className="buttons">
            <Link to="/contact" className="btn primary">
              Book a Meeting
            </Link>
            <Link to="/about" className="btn secondary">
              Learn more
            </Link>
          </div>
          <div className="social-icons">
            <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
              <p>Contact me</p>
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
              <p>Join the community</p>
            </a>
            <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-x-twitter"></i>
              <p>Join the conversation</p>
            </a>
            <a href="https://facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
              <p>Stay updated</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
