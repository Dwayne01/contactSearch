import React from 'react';
import Placeholder from '../placeholder.png'
import Result from './Result';
import '../App.scss'


export default class PlaceHolder extends React.Component {


 render() {
  return (
    <div className="contPlaceHolder">
                <div className="labelPlaceHolder">
                {this.props.show && <label>Top results for <label className="namePlaceHolder">`{this.props.search }`</label></label>}
                </div>

                {this.props.value &&  
                  <div className="row">
                    <div className="col-4 colPlaceHolder">
                         <div className="boxPlaceHolder">
                            <img src={Placeholder} className="imagePlaceHolder" alt="search" />
                         </div>
                    </div>
                    <div className="col-4 colPlaceHolder">
                         <div className="boxPlaceHolder">
                            <img src={Placeholder} className="imagePlaceHolder" alt="search" />
                         </div>
                    </div>
                    <div className="col-4 colPlaceHolder">
                         <div className="boxPlaceHolder">
                             <img src={Placeholder} className="imagePlaceHolder" alt="search" />
                         </div>
                    </div>
                    </div>}

                    {this.props.contact.length > 0 &&
                    <Result
                    openModalHandler={this.props.openModalHandler}
                    closeModalHandler={this.props.closeModalHandler}
                    contact={this.props.contact}
                    />}
               
                    {this.props.contact.length === 0 && <div style={{height: 200}}></div>}
    </div>
  );
}
}
