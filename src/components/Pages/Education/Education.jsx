import React from 'react';
import './Education.css';
import { educationData } from '../../Data/educationData';

const Education = () => {
  return (
    <div className="education-container education">
      <div className="timeline"></div>
      {educationData.map((item, index) => (
        <div
          key={item.id || index} // I Used index as a fallback for unique keys
          className={`education-card ${
            index % 2 === 0 ? 'left-card' : 'right-card'
          }`}
        >
          <div className="education-content">
            <h3>{item.institution}</h3>
            <h4>{item.course}</h4>
            <p>
              {item.startYear} - {item.endYear}
            </p>
            <a href={item.Verify} target="_blank" rel="noopener noreferrer">
              Verify - Here
            </a>
          </div>
          <div className="education-image">
            <img src={item.image} alt={item.course} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
