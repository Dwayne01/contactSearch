import React from 'react';
import Background from '../bg-path.svg';
import Search from '../how-it-works-1.png';
import Result from '../how-it-works-2.png';
import Info from '../how-it-works-3.png';
import '../App.scss'


function Works() {
  return (
    <div className="contWorks">
            <div className="box">
               <h2 className="title">How it works.</h2>
                <div className="row">
                    <div className="col-4 col">
                        <img src={Search} className="icon" alt="search" />
                        <div className="detail">
                            <h1 className="number">1.</h1>
                            <label className="label">Type a name and hit enter to start searching</label>
                        </div> 
                    </div>
                    <div className="col-4 col">
                        <img src={Result} className="icon" alt="search" />
                        <div className="detail">
                            <h1 className="number">2.</h1>
                            <label className="label">Get instant results with contact details</label>
                        </div>
                    </div>
                    <div className="col-4 col">
                        <img src={Info} className="icon" alt="search" />
                        <div className="detail">
                            <h1 className="number">3.</h1>
                            <label className="label">Sign up or sign in to reveal more information</label>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
}

export default Works;
