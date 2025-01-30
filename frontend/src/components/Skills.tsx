// Skills.tsx
import React, { useEffect, useState } from "react";
import "../styles/skills.scss";

const Skills: React.FC = () => {
  const skillsData = [
    {
      title: "React.js | Vue.js | TailwindCSS | SCSS",
      subtitle: "Frontend Magic",
    },
    {
      title: "Node.js | Express | Python",
      subtitle: "Backend Powerhouse",
    },
    {
      title: "MongoDB | MySQL | PostgreSQL",
      subtitle: "Database Wizardry",
    },
    {
      title: "API & Cloud Development, Git, CI/CD Pipelines",
      subtitle: "Other Skills",
    },
  ];
  // State to track screen width
  const [weeks, setWeeks] = useState(53);

  // Function to determine number of weeks based on screen width
  const updateWeeks = () => {
    const width = window.innerWidth;
    if (width <= 480) {
      setWeeks(36); // Reduce to half the weeks on small screens
    } else if (width <= 768) {
      setWeeks(40); // Medium screens
    } else {
      setWeeks(53); // Default full weeks
    }
  };

  // Run on mount and update when window resizes
  useEffect(() => {
    updateWeeks();
    window.addEventListener("resize", updateWeeks);
    return () => window.removeEventListener("resize", updateWeeks);
  }, []);

  // Generate contribution grid dynamically
  const generateContributions = () => {
    const days = 7;
    return Array.from({ length: weeks }, () =>
      Array.from({ length: days }, () => Math.floor(Math.random() * 5))
    );
  };

  const contributions = generateContributions();

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h2>Skills:</h2>
        <p className="subtitle">What I bring to the Table.</p>
      </div>

      <div className="skills-content">
      <div className="continuous-improvements">
      
      <div className="contribution-grid">
        {contributions.map((week, weekIndex) => (
          <div key={weekIndex} className="week-column">
            {week.map((day, dayIndex) => (
              <div 
                key={dayIndex}
                className={`contribution-day level-${day}`}
                data-tooltip={`${day} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="title-contanier"><h2 className="ci-title">Continuous Improvements</h2></div>
    </div>

        {skillsData.map((skill, index) => (
          <div key={index} className="skill-group">
            <div className="skill-title"><p>{skill.title}</p></div>
            <div className="skill-subtitle"><p>{skill.subtitle}</p></div>
            {/* {index !== skillsData.length - 1 && (
              <div className="skill-divider" />
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
