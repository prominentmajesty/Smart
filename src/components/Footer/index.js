import React from 'react';

function Footer() {
  return (
    <>
        <footer class="page-footer" style={{backgroundColor : 'darkGrey'}}>
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text brand-logo">@CHINEDUM</h5>
                <p class="grey-text text-lighten-4">Chim na edum..I Strive not to be a success, but rather to be of value. That's why I'm unique</p>
                <p>Do you know that Only two things are infinite, the universe and human stupidity, and I'm not sure about the former</p>
                <p>The human brain is an incredible pattern-matching machine</p>
              </div>
              <div class="col l4 offset-l2 s12">

                <div className='skills'>
                  <h4 className='sk'>Skills</h4>
                 <strong>{`1.`}</strong> Efficient Communication skills in English Language <br></br>
                 <strong>{`2.`}</strong> Microsoft office Applications <br></br>
                 <strong>{`3.`}</strong>Poet and Writer <br></br>
                 <strong>{`4.`}</strong>Human rights Activist
                </div>
                <h5 class="white-text"></h5>
                <ul>
                    <i className="material-icons-outlined">email</i> chinedumsamykere@gmail.com
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2023 Copyright @ chinedum - All Right Reserved
            <a class="grey-text text-lighten-4 right" href="#!">Powered by : GMM <small>systems</small></a>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer;
