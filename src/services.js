import react from 'react';
import './App.css';


function Services() {
    return (
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
    );
}

export default Services;