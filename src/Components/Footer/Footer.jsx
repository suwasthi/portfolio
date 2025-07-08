import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://github.com/suwasthi" rel="noopener noreferrer">
          <FaGithub className="icon github-icon" />
        </a>
        <a href="https://www.linkedin.com/in/suwasthiga-nagendramoorthy-2269b72a4/" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin-icon" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100085836886265" rel="noopener noreferrer">
          <FaFacebook className="icon facebook-icon" />
        </a>
        <a href="https://www.instagram.com/suwasthisuwaa?igsh=MWk3dTc2YWd6MXFpMg%3D%3D&utm_source=qr" rel="noopener noreferrer">
          <FaInstagram className="icon instagram-icon" />
        </a>
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} Suwasthiga All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
