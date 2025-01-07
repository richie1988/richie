import React, { useState, useEffect } from 'react';
import './Home.css';
import RainAnimation from '../../Animation/Animation';
import Skills from '../Skills/Skills';
import Iconsetting from '../../../assets/icon-setting.svg';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to show the button after scrolling down a certain distance
  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='main-container'>
      <div className='home-container'>
        <RainAnimation />
        <div className='left-column'>
          <div className='animation-box'>
            <img src={Iconsetting} alt='icon' />
          </div>
          <div className='tech-box'>
            <li className='web-info'>Software-Developer</li>
            <li className='it-info'>IT-Support</li>
            <li className='data-info'>Data-Analytics</li>
          </div>
        </div>
        <div className='right-column'>
          <div className='profile-box'>
            <h2>Hello, I'm Richard Sikaonga.</h2>
            <div className='profile-box'>
              <p>
                Software Developer | IT Support Specialist | Data Analyst | Front-end expertise in creating seamless user experiences using JavaScript. Passionate about solving technical challenges and continuous growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Skills />

      {/* Scroll to Top Button */}
      {isVisible && (
        <button className='scroll-to-top' onClick={scrollToTop}>
          ↑ Top
        </button>
      )}
    </div>
  );
};

export default Home;
