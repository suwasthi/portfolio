import React, { useState, useRef } from 'react';
import './Achievements.css';
import Achievements_data from '../../assets/Achievements';

const Achievements = () => {
  const [visibleCount, setVisibleCount] = useState(2); // Show only 2 initially
  const [expanded, setExpanded] = useState(false); // Track if expanded
  const achievementsRef = useRef(null); // Reference for scrolling

  const toggleAchievements = () => {
    if (expanded) {
      setVisibleCount(2); // Collapse back to 2
      setTimeout(() => {
        achievementsRef.current?.scrollIntoView({ behavior: 'smooth' }); // Scroll to top
      }, 100);
    } else {
      setVisibleCount(Achievements_data.length); // Show all
    }
    setExpanded(!expanded);
  };

  return (
    <div id='Achievements' className='achievements' ref={achievementsRef}>
        <div className="achievements-title">
            <h1>My Achievements</h1>
        </div>
        <div className="achievements-container">
            {Achievements_data.slice(0, visibleCount).map((achievement, index) => (
                <div key={index} className='achievements-format'>
                    <h3>{achievement.a_name}</h3>
                    <p>{achievement.a_desc}</p>
                    {achievement.img_src && (
                      <img src={achievement.img_src} className="achievements-image" alt="Achievement" />
                    )}
                    <ul className="achievements-details">
                        {achievement.details.map((detail, i) => (
                            <li key={i}>
                                {Object.values(detail)[0]}: {Object.values(detail)[1]}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        {Achievements_data.length > 2 && ( // Show button only if more than 2 achievements exist
          <div className="showmore" onClick={toggleAchievements}>
            <p>{expanded ? "Show Less" : "Show More"}</p>
          </div>
        )}
    </div>
  );
};

export default Achievements;
