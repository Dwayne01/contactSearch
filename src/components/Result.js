import React from 'react';
import Placeholder from '../placeholder.png'
import Phone from '../location-icon.svg'
import Email from '../email-icon.svg'
import { red } from 'ansi-colors';
import Star from '../star.png';
import ContactModal from './Modal/Modal'



export default class Result extends React.Component {



    constructor(props) {
        super(props);
    this.state = {
        search: '',
        value: false,
        show: false,
        contact: [],
        modalIsOpen: false,
        details: {}
    };


    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
   }


   openModal(data) {
       console.log('here')
    this.setState({modalIsOpen: true, details: data});
  }
 
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }




 render() {
  return (
    
                <div className="row">

                  { this.state.details.id && <ContactModal 
                      contactDetails={this.state.details}
                      modalIsOpen={this.state.modalIsOpen}
                      onRequestClose={this.closeModal}/>}

                    {this.props.contact.map((data, ind) => (
                    <div key={ind} className="col-4 .colPlaceHolder" onClick={() => this.openModal(data)}>
                         <div className="boxResult">
                             <div  className="row">
                                          
                                <div className="col-4 resultLeft">    
                                <img src={data.picture.large} className="contactImage" alt="search" />
                                </div>
                                <div className="col-8 resultRight"> 
                                        <div> 
                                            <label className="contactName">{data.name.first} {data.name.last}</label>
                                            <label className="nat">{data.nat}</label>
                                        </div>

                                        <div className="rowContact">
                                            <img src={Phone} className="contactIcon" alt="search" />
                                            <label className="contactPhone">{data.phone}</label>
                                        </div>
                                            
                                        <div className="rowContact">
                                        <img src={Email} className="contactIcon" alt="search" />
                                        <label className="contactEmail">{data.email}</label>
                                        <img src={Star} className="contactFav" alt="search" />
                                        </div>
                                </div>
                             </div>
                    
                         </div>
                    </div>))}

            </div>
    
  );
}

}
