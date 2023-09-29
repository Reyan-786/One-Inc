import React from 'react';
import './App.css';
import rehanpic from './Rehan.jpeg';
import faisalpic from './Faisalpic.jpeg';
import adnaanpic from './Adnaanpic.jpeg';

function Team() {
    return (
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

    );
}

export default Team;