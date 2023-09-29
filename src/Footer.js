import React from 'react';
import './App.css';

function Footer() {
    return(
        <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()}<strong> The One.Inc.</strong> All Rights Reserved</p>
          <p>Designed by RK</p>
        </div>
      </footer>
    );
}

export default Footer;