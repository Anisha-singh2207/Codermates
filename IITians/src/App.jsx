import Carousel from './Components/Carsouel/Carsouel';
import CoreValues from './Components/CoreValues/CoreValues';
import CourseCards from './Components/Courses/Courses';
import Header from './Components/Header/Header'; 
import JourneyTimeline from './Components/JourneyTimeline/JouneyTimeline';
import LocationsSection from './Components/LocationSection/LocationSection';
import MissionSection from './Components/MissionSection/MissionSection';
import Paragraph from './Components/Paragraph/Paragraph';
import Readmore from './Components/ReadMore/Readmore';
import VisionSection from './Components/VisionSection/VisionSection';
import {slides} from './data/carsouelData.json'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Header />
                <Carousel data={slides}/>
                <Paragraph/>
                <Readmore/>
               <CourseCards/>
               <VisionSection/>
               <MissionSection/>
               <CoreValues/>
               <JourneyTimeline/>
               <LocationsSection/>
              </>
            } 
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
