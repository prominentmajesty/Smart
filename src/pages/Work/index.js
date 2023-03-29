import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';

function Work() {
  return (
    <>
        <Header />
          <div className='row'style={{height : '50%'}}>
            <div className='col s12'>
              <div className='center' style={{marginTop : '5rem'}}>
                <h4>Content Loading...</h4>
                <p>This page will be updated soon</p>
              </div>
            </div>
          </div>
        <Footer/>
    </>
  )
}

export default Work
