import React from 'react';
import Modal from 'react-modal';
import Phone from '../../location-icon.svg'
import Email from '../../email-icon.svg'
import Location from '../../address-icon.svg'
import Star from '../../star.png';
import Lock from '../../padlock.png'
import Error from '../../error.png'


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      padding: '20px 60px 0px 60px',
      overflow: 'none',
      textAlign: 'center',
      width: '60%'
    },
    overlay: {
      position: 'fixed',
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
  };


const ContactModal = (props) => {
    return (
      <Modal
           style={customStyles}
          isOpen={props.modalIsOpen}>
        <div>
              <img src={Error} className="closeIcon" onClick={() => props.onRequestClose()} alt="search" />
            <img src={props.contactDetails.picture.large} className="modalImage" alt="search" />
        </div>   
        <div className="modalContainer">
            <div>
                <label className="modalName">{props.contactDetails.name.first} {props.contactDetails.name.last}</label>
            </div>
            <div>
                <label className="gender">{props.contactDetails.gender}, {props.contactDetails.dob.age}</label>
            </div>
            <div>    
                <label className="modalNat">{props.contactDetails.nat}</label>
            </div>



            <div className="row marinTop">
                    <div className="col-4" style={{ display: 'flex'}}>
                        <img src={Phone} style={{width: 20, marginRight: 10}} alt="search" />
                        <label className="modalDetails">{props.contactDetails.phone}</label>
                    </div>
                        
                    <div className="col-4" style={{ display: 'flex'}}>
                        <img src={Email} className="contactIcon" alt="search" />
                        <label className="modalDetails">{props.contactDetails.email}</label>
                    </div>


                    <div className="col-4" style={{ width: '33.3%'}}>
                        <img src={Location} className="contactIcon" alt="search" />
                        <label className="modalDetails">{props.contactDetails.location.city}</label>
                    </div>
            </div>

      <div  className="row marinTop signUpModal">
              
              <label className="favorite"><img src={Star} className="contactIcon" alt="search" /> add to favorite</label>

              <a className="modlaSignupButton" href="#"><img src={Lock} className="contactIcon" alt="search" /> Sign In</a>

              <label className="moreDetails">to get more informaiton</label>
      </div>

      </div>
      </Modal>
    )
}

export default ContactModal;
