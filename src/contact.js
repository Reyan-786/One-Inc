import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';


function Contact() {
    return (
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
    );
}

export default Contact;