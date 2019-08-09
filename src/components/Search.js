import React from 'react';
import search from '../search.png';
import close from '../close.png';
import axios from 'axios';
import PlaceHolder from './PlaceHolder';
import Works from './Works';
import Contact from './Contact';
import Footer from './Footer';
 import '../App.scss'


export default class Search extends React.Component {

  
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            value: false,
            show: false,
            contact: [],
            modalIsOpen: false
        };

    this.handleKeyPress = this.handleKeyPress.bind(this)
   }



 handleGetContact(e){
     this.setState({search: e.target.value, show:false, contact: []})
     if(!this.state.search){
         this.setState({contact: [], show: false})
     }
}

handleKeyPress(event){
    let details = []
    if(event.key === 'Enter'){
    this.setState({value: true, show: true, contact: details})
        axios.get('https://randomuser.me/api/?seed=204df1ad1984e061&page=1&results=5000')
    .then(response => {

        response.data.results.map(data => {
            if(data.name.first === this.state.search.toLowerCase()){
                // console.log(data);
                details.push(data);
            }
        })
        
        this.setState({contact: details, value: false})
    })
    .catch(error => {
        console.log(error);
        this.setState({contact: details, value: false})
    });
    }
}

render(){
  return (
    
    <div className="App">
<div className="row">
        <div className="col-12">
        <h1 className="title">Get contact information from just a name!</h1>
        <h1 className="subtitle">Search up to 500,000 records in seconds</h1>

        
        </div>
        </div>

        <div className="cont">
            <div className="inputFieldCont">
                <input className="inputField" placeholder="Enter a name and hit enter to search, eg. Paige" onKeyPress={this.handleKeyPress}  onChange={(e) => this.handleGetContact(e)} type="text" name="FirstName" value={this.state.search} />
                {!this.state.search ? <img src={search} className="search" alt="search" />
                 : <img src={close} onClick={()=> this.setState({search: ''})} className="search" alt="search" />}
            </div>
        </div> 
       {!this.state.search ?
       <div>
            <Works />
            <Contact />
            <hr className="divider"/>
        </div>:
        <div>
          <PlaceHolder
            search={this.state.search }
            value={this.state.value}
            show={this.state.show}
            openModalHandler={this.openModal}
            closeModalHandler={this.closeModalHandler}
            contact={this.state.contact}
            />
        </div>
       }
        
    </div>
  );
}
}
