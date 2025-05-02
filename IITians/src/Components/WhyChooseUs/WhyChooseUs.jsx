import React from "react";
import "./WhyChooseUs.css";

const points = [
  {
    id: 1,
    title: "Proven Success",
    description:
      "Our track record speaks for itself, with a high success rate in competitive exams. Our students consistently achieve top ranks, making us a trusted choice for exam preparation.",
  },
  {
    id: 2,
    title: "Experienced Faculty",
    description:
      "Our faculty members are experts in their fields, bringing years of experience and knowledge to the classroom. They are dedicated to helping students succeed.",
  },
  {
    id: 3,
    title: "Comprehensive Programs",
    description:
      "We offer a wide range of programs tailored to meet the needs of different students. From foundation courses to advanced coaching, we have something for everyone.",
  },
  {
    id: 4,
    title: "Student-Centric Approach",
    description:
      "Our approach is centered around the needs of our students. We provide personalized attention, flexible schedules, and a supportive learning environment.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us-content">
        <h2>Why Choose Us</h2>
        {points.map((point) => (
          <div className="point-item" key={point.id}>
            <div className="point-icon">✔</div>
            <div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
