import React from "react";
import "./Footer.css";

// Import SVGs
import githubIcon from "../../assets/social/github.svg";
import gmailIcon from "../../assets/social/gmail.svg";
import whatsappIcon from "../../assets/social/whatsapp.svg";
import linkedinIcon from "../../assets/social/linkedin.svg";
import twitterIcon from "../../assets/social/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/richie1988" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="mailto:richiessikaonga@gmail.com">
          <img src={gmailIcon} alt="Gmail" />
        </a>
        <a href="https://wa.me/0027764929880" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
        <a href="https://www.linkedin.com/in/richard-sikaonga/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://x.com/RichardSikao" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>
      </div>
      <div className="footer-content">
        <p>© 2024 Richard Sikaonga. All Rights Reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="https://public.tableau.com/app/profile/richard.sikaonga/vizzes" target="_blank" rel="noopener noreferrer">
              Tableau
            </a>
          </li>
          <li>
            <a href="https://www.kaggle.com/richiesikaonga" target="_blank" rel="noopener noreferrer">
              Kaggle
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
