import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Loader from './Components/Loader/Loader';
import HeroSection from './HeroSection/HeroSection';
import WelcomeCEO from './Components/WelcomeCEO/WelcomeCEO';
// import Paragraph from './Components/Paragraph/Paragraph';
// import Readmore from './Components/ReadMore/Readmore';
import CourseCards from './Components/Courses/Courses';
import VisionSection from './Components/VisionSection/VisionSection';
import ServicesSection from './Components/ServicesSection/ServicesSection';
import MissionSection from './Components/MissionSection/MissionSection';
import CoreValues from './Components/CoreValues/CoreValues';
import JourneyTimeline from './Components/JourneyTimeline/JouneyTimeline';
import LocationsSection from './Components/LocationSection/LocationSection';
import LeadershipTeam from './Components/LeadershipTeam/LeadershipTeam';
import SocialResponsibility from './Components/SocialResponsibility/SocialResponsibility';
import StatsSection from './Components/StatsSection/StatsSection';
import KeyFeatures from './Components/KeyFeatures/KeyFeatures';
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import FooterSection from './Components/FooterSection/FooterSection';
// import GoogleMapComponent from './Components/GoogleMap/GoogleMap';
import EducationBanner from './Components/EducationBanner/EducationBanner';
import AboutSection from './Components/AboutSection/AboutSection';
import Empower from './Components/Empower/Empower';
// import Header from './Components/Header/Header';
// import Carousel from './Components/Carsouel/Carsouel';
// import { slides } from './data/carsouelData.json';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <HeroSection />
              <EducationBanner/>
              {/* <Header /> */}
              <WelcomeCEO />
              {/* <Carousel data={slides}/> */}
              {/* <Paragraph /> */}
              <AboutSection/>
              {/* <Readmore /> */}
              <CourseCards />
              <VisionSection />
              <ServicesSection />
              <MissionSection />
              <CoreValues />
              <JourneyTimeline />
              <LocationsSection />
              <LeadershipTeam />
              <SocialResponsibility />
              <Empower/>
              <StatsSection />
              <KeyFeatures />
              <WhyChooseUs />
              <GetInTouch />
              <FooterSection />
              {/* <GoogleMapComponent/> */}
            </>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
