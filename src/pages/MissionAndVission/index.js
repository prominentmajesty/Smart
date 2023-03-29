import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css'

function MissionAndVission() {
  return (
    <>
      <Header />
        <div className='row'style={{height : '50%'}}>
          <div className='col s12'>
            <div className='center' style={{marginTop : '5rem'}}>
              <h4>Vission</h4>
                <p>
                  My vision is to be an honest, empathetic and impactful  leader/career person and to be recognized internationally within my industry or business I do
                </p>
                <p></p>
                <div className='mission'>
                  <h4>Mission</h4>
                  <p>My mission-"To be a leader to my team, live a balanced life and make a difference." "To inspire others to achieve great things." "To thrive in my journey through life and learn life's lessons along the way." "To be kind to others and myself.</p>
                </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default MissionAndVission;
