import React from "react";
import "./KeyFeatures.css";

const features = [
  {
    id: 1,
    title: "Expert Faculty",
    description:
      "Our faculty members are highly experienced and dedicated to providing quality education. They use innovative teaching methods to ensure students understand complex concepts and excel in their exams.",
  },
  {
    id: 2,
    title: "Comprehensive Materials",
    description:
      "We provide students with comprehensive study materials that cover all aspects of the syllabus. Our materials are regularly updated to reflect the latest exam patterns and trends.",
  },
  {
    id: 3,
    title: "Personalized Attention",
    description:
      "We offer personalized attention to each student, ensuring that their individual needs are met. Our small batch sizes allow for one-on-one interaction with teachers.",
  },
];

const KeyFeatures = () => {
  return (
    <section className="key-features">
      <div className="key-features-image">
        <img
          src="https://assets.storydoc.com/b4804fc30975071653e363e0b4a62ef0/7335a142-5e3d-412e-a6fd-df55a3f904e3"
          alt="Features"
        />
      </div>
      <div className="key-features-content">
        <h2>Key Features</h2>
        {features.map((feature) => (
          <div className="feature-item" key={feature.id}>
            <div className="feature-icon">✔</div>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
