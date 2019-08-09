import React from 'react';
import logo from '../logo.png';
import  '../App.scss'



function Header() {
  return (
    <div className="App">
       <div className="row header">
            <div className="col-6 logCont">
                    <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="col-6 topnav">
                <a className="activeLink" href="#">Home</a>
                <a className="link" href="#">About</a>
                <a className="link" href="#">Pricing</a>
                <a className="link" href="#">Login</a>
                <a className="linkBotton" href="#">Sign In</a>
            </div>
       </div>
    </div>
  );
}

export default Header;
