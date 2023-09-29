import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import pic from './hero-section-image.svg';
import rehanpic from './Rehan.jpeg'
import faisalpic from './Faisalpic.jpeg'
import adnaanpic from './Adnaanpic.jpeg';
function App() {
  return (
    <div className="App">
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
    
      {/* <section id="about" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>About Us</h2>
              <p>We help you build your Dream MicroSaaS.</p>
            </div>
            <div className="col-md-6">
              <img src="about-image.jpg" alt="About Us" className="img-fluid" />
            </div>
          </div>
        </div>
      </section> */}
      
      <section id="services" className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <p className = 'OneLine'>Discover our extensive range of cutting-edge tech services and experience the enchantment of our craftsmanship</p>
          <div className="row">
            <div className="col-md-4">
              <div className="service">
                <h3>Software Development</h3>
                <p>Having trouble building software? Dont worry, We got you...</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service">
                <h3>Data Engineering</h3>
                <p>Having trouble with your data products, we are your Genie for making your data listen to you...</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service">
                <h3>Data Scraping</h3>
                <p>Need data for building and training your ML models, but dont know how to get it? we got you covered here also...</p>
              </div>
            </div>
            {/* add more such col-md-4 as & when required. */}
          </div>
        </div>
      </section>

      <section className="team-section">
          <h2>Team</h2>
          <p>Our Team is highly skilled in Software Development, Data Analytics, Machine Learning & A.I.</p>
          <div className='Team-Container'>
          <div className="team-member">
          <div className="member-content">
            <img className="team-img" src={rehanpic} alt='Mohd Rehan' />
            <div className="member-info">
              <p className='Member-Name'>Mohd Rehan</p>
              <a href="https://www.linkedin.com/" target="_blank" class="social-icon"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="team-member">
          <div className="member-content">
            <img className="team-img" src={faisalpic} alt='Faisal Khan' />
            <div className="member-info">
            <p className = 'Member-Name'>Faisal Khan</p>
            <a href="https://www.linkedin.com/" target="_blank" class="social-icon"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <div className="team-member">
          <div className="member-content">
            <img className="team-img" src={adnaanpic} alt='Mohd Adnaan' />
            <div className="member-info">
            <p className = 'Member-Name'>Mohd Adnaan</p>
            <a href="https://www.linkedin.com/" target="_blank" class="social-icon"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          </div>
      </section>

      
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
            <div className="col-md-6">
              <div className="contact-info">
                <p><i className="fa fa-map-marker"></i>-: Friends Colony, S.S Nagar, Aligarh</p>
                <p><i className="fa fa-envelope"></i>-: info@databirdservices.com</p>
                <p><i className="fa fa-phone"></i>-: +91-9012221138</p>
              </div>
              <div className = 'social-icons'>
                <a href="https://www.facebook.com/YourPage" target="_blank" class="social-icon"><i class="fab fa-facebook"></i></a>
                <a href="https://twitter.com/YourPage" target="_blank" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/YourPage" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/YourPage" target="_blank" class="social-icon"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.google.com/YourPage" target="_blank" class="social-icon"><i class="fab fa-google"></i></a>
            </div>
          </div>
          </div>
        </div>
      </section>

      
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()}<strong> The One.Inc.</strong> All Rights Reserved</p>
          <p>Designed by RK</p>
        </div>
      </footer>
    </div>
  );
}

export default App;


      
    