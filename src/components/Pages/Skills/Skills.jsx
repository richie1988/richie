import React from 'react';
import './Skills.css';
import { skillsData } from '../../Data/skillsData';

const Skills = () => {
  return (
    <div className="skills-container">
        <h2>SKILLS</h2>
      <div className="skills-scroller">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
