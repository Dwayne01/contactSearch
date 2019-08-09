import React from 'react';
import Background from '../bg-path.svg';
import List from '../demo-content.png';
import '../App.scss'


function Contact() {
  return (
    <div>
       <div className="row contactContainer">
            <div className="col-8 left">
                <h2>Need more information on a contact?</h2>
                <label>Get started with your account today and access up to 500,000 records with our instant search. If you already have an account with us, simply <lable className="titleContact">sign in.</lable></label>
                <div className="getStarted" href="#">Get Started</div>
            </div>
            <div className="col-4">
              <img src={List} className="imageContact" alt="search" />
            </div>
       </div>
    </div>
  );
}

export default Contact;
