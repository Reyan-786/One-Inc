import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';
import pic from './hero-section-image.svg';

function Header() {
  return (
    <header className="header">
        <div className="container-fluid">
          <nav className="navbar">
            <a href="/" className="logo">The One Inc.</a>
            <ul className="nav-menu">
              <li><a href="#about">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">Team</a></li>
            </ul>
          </nav>
          <div className="hero">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="hero-content">
            <h1> Bringing your MicroSaaS ideas to life! </h1>
            <p> Providing cutting edge tech solutions. </p>
            <Button variant="primary">Get Started</Button>
          </div>
        </div>
        <div className="col-md-6">
          <img src={pic} alt="Hero Image" className="hero-image img-fluid" />
        </div>
      </div>
    </div>
  </div>
    </div>
      </header>
  );
}

export default Header;
