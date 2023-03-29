import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles.css';

function About() {
  return (
    <>
      <Header />
        <div className='row' style={{paddingTop : '3.3rem', paddingBottom : '3.3rem'}}>
          <div className='col s12'>
            <div className='center'>
              <h4>About Me</h4>
            </div>
            <p>
              I'm Okere Wisdom Chinedum, Nwa Samykere.I am a First Class
              Administrator, Christian, Poet, Writer, Realist and Teacher
              I have transformed my life through determination, hard work,
              discipline and consistency and i can literally do the same for you.
              I am a master coach and a passionate speaker. I am the founder of 
              Smmykere Dynasty foundation, special counsellor in many corporations
              across federal republic of Nigeria. I have found balance between work
              and life, now i'm a totally happy individual, A loving and inspiring 
              speaker, a writer and a firm investor. But it did not come easily.
              I have also gone through hundreds of failures and complicated situations
            </p> 
            <p>
              I am also a skilled artist helping you create really beautiful and meaningful 
              things in your niche. My works are aesthetically pleasing in every shape and pattern.
              I am a skilled artist presenting unique projects. I work both with businesses and 
              individuals, and always find a non-standard approach to the task.
              I work with commercial projects of any scale and with private requests. I use the
              latest tools and creative approaches that help solve a specific business or personal issue.

              I'll be happy to join creative teams to work on young-eyed commercial or social projects. 
              If you think we can create something great together, contact me in any convenient way to 
              discuss the possible cooperation.
            </p>
            </div>
        </div>
      <Footer />
    </>
  )
  }

export default About
