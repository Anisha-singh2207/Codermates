import React from "react";
import "./LeadershipTeam.css"; // Import the CSS file

const leadershipTeam = [
  {
    name: "MDD Sir",
    title: "Chief Academic Officer",
    description: "Curriculum development and academic standards.",
    image: "https://imgs.search.brave.com/K4nYddB61jXRzl01TDDnmONPjhyhRBcv_uEi-T3COOQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hdHBz/dGFyLmNvbS9wdWJs/aWMvaW1hZ2VzL2Fi/b3V0L3ZpbmVldC1r/aGF0cmkud2VicA", // Replace with actual image
  },
  {
    name: "Taylor Morgan",
    title: "Director of Operations",
    description: "Manages daily operations and strategic planning.",
    image: "https://imgs.search.brave.com/QeCrxAb9w15OLklr4TrP7ruCAla6FdRrtphLnMsSEeE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aWlpdGRtLmFjLmlu/L19hcHAvaW1tdXRh/YmxlL2Fzc2V0cy9E/ck5hZ2FtYW5pa2Fu/ZGFuLjVmYTU3OGUy/LndlYnA", // Replace with actual image
  },
  {
    name: "Casey Jordan",
    title: "Head of Student Affairs",
    description: "Ensures student satisfaction and support services.",
    image: "https://imgs.search.brave.com/TxjpBi9xuppdmoPlQJj8Cyc6ZZTgXCvT0iIMQpV73Mk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aWlpdGRtLmFjLmlu/L19hcHAvaW1tdXRh/YmxlL2Fzc2V0cy9Q/cm9mUmFqYUIuMWU1/YjRhMTMud2VicA", // Replace with actual image
  },
];

const LeadershipTeam = () => {
  return (
    <section className="leadership-section">
      <h2 className="section-title">Leadership Team</h2>
      <div className="team-container">
        {leadershipTeam.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="image-wrapper">
              <img src={member.image} alt={member.name} />
            </div>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-title">{member.title}</p>
            <p className="member-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipTeam;
