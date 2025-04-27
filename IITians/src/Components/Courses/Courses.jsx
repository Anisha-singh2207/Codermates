import React from 'react';
import './Courses.css';

const courses = [
  {
    title: "VIII to X IGCSE",
    image: "https://iitiansacademy.in/img/products/921b5042-cc21-44d3-9561-dc8429da60b3.jpeg",
    description: "Comprehensive coaching for IGCSE curriculum.",
  },
  {
    title: "VIII to X ICSE",
    image: "https://iitiansacademy.in/img/products/daf5b15c-dd74-466e-b91a-9e25a9f8c8cd.jpg",
    description: "In-depth preparation for ICSE board exams.",
  },
  {
    title: "VIII to X CBSE",
    image: "https://iitiansacademy.in/img/products/be13b060-694b-4dbc-bb73-facaea90fa2d.jpeg",
    description: "Focused coaching for CBSE students.",
  },
  {
    title: "VIII to X SSC",
    image: "https://iitiansacademy.in/img/products/7a1331f3-955a-4018-82ec-b824c1cd7ae8.jpeg",
    description: "Tailored programs for SSC board students.",
  },
  {
    title: "IIT Foundation",
    image: "https://iitiansacademy.in/img/products/ae911cca-6023-490f-90df-25c43ffd0493.jpeg",
    description: "Building strong foundations for IIT aspirants.",
  },
  {
    title: "NEET (Medical)",
    image: "https://iitiansacademy.in/img/products/e22ce40e-a504-4f88-9aba-582f11e9faca.jpg",
    description: "Expert coaching for NEET preparation.",
  },
  {
    title: "IIT-JEE (Mains+Advance)",
    image: "https://iitiansacademy.in/img/products/08db82b8-0a5c-4973-8069-c6496d1230c6.jpg",
    description: "Comprehensive training for IIT-JEE exams.",
  },
  {
    title: "MHT-CET",
    image: "https://iitiansacademy.in/img/products/9513773d-35a4-4b17-86ac-9a4165417066.jpg",
    description: "Focused coaching for MHT-CET aspirants.",
  },
];

const CourseCards = () => {
  return (
    <div className="courses-wrapper">
      <h2 className="courses-heading">OUR COURSES</h2>
      <div className="course-card-container">
        {courses.map((course, idx) => (
          <div className="course-card" key={idx}>
            <img src={course.image} alt={course.title} className="course-image" />
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;
