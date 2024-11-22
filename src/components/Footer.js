import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Sweet Delights. All rights reserved.</p>
      <p>Follow us on:</p>
      <div className="social-links">
        <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
