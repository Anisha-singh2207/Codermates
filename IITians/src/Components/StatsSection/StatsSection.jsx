import React, { useEffect, useState } from "react";
import "./StatsSection.css";

const statsData = [
  { id: 1, icon: "📍", number: 6, label: "Locations Across Mumbai" },
  { id: 2, icon: "🎓", number: 10000, label: "Students Enrolled" },
  { id: 3, icon: "📈", number: 95, label: "Success Rate in Exams" },
  { id: 4, icon: "🗓", number: 10, label: "Years of Experience" },
  { id: 5, icon: "👩‍🏫", number: 25, label: "Experienced Faculty Members" },
  { id: 6, icon: "📚", number: 20, label: "Courses Offered" },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1500; // Total duration of animation in ms

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      const newCounts = statsData.map((stat, index) =>
        Math.floor(progress * stat.number)
      );

      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const getSuffix = (id) => {
    if ([2, 4, 5, 6].includes(id)) return "+";
    if (id === 3) return "%";
    return "";
  };

  return (
    <section className="stats-section">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div className="stat-card" key={stat.id}>
            <div className="stat-icon">{stat.icon}</div>
            <h3 className="stat-number">
              {counts[index]}
              {getSuffix(stat.id)}
            </h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
