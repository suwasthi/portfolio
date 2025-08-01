import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./About.css";

const skills = [
  { name: "Python", percentage: 80 },
  { name: "C++", percentage: 70 },
  { name: "HTML & CSS", percentage: 90 },
  { name: "React", percentage: 90 },
  { name: "JavaScript", percentage: 75 },
  { name: "MySQL", percentage: 100 },
  { name: "MongoDB", percentage: 80 }
];

const About = () => {
  const [progressValues, setProgressValues] = useState(skills.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null); // Ref for the About section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 } // 40% of the section must be visible to trigger animation
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const intervals = skills.map((skill, index) => {
        return setInterval(() => {
          setProgressValues((prevValues) => {
            const newValues = [...prevValues];
            if (newValues[index] < skill.percentage) {
              newValues[index] += 1;
            }
            return newValues;
          });
        }, 20);
      });

      return () => {
        intervals.forEach(clearInterval);
      };
    }
  }, [isVisible]);

  return (
    <div id="About" className="About" ref={aboutRef}>
      <div className="about-title">
        <h1>About me</h1>
        <p>I have a deep interest in Embedded Systems, IoT, and Full-Stack Web Development. I love working on projects that connect the physical and digital worlds—whether it's developing smart devices or building scalable web applications.</p>
        <p>                                                                                                                                                    </p>
        <p>My passion lies in creating practical, real-world solutions by combining low-level hardware control with intuitive user interfaces. I'm always eager to explore new technologies, learn hands-on, and contribute to impactful tech innovations.</p>
      </div>
      <div className="about-skills">
        {skills.map((skill, index) => (
          <div className="about-skill" key={index}>
            <div className="progressbar-container circular-progress">
              <CircularProgressbar
                value={progressValues[index]}
                text={skill.name}
                styles={buildStyles({
                  pathColor: "url(#gradient)",
                  trailColor: "#222",
                  textColor: "#D8D8D8",
                  textSize: "13px"
                })}
              />
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#DF8908" />
                    <stop offset="100%" stopColor="#B415FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
