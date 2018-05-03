import React, { Component } from 'react';
import  './location.css';


class LocationFinder extends  Component{
  constructor(props) {
    super(props);
    console.log(props)
  }
 
  render(){
    return(
      <div>
       <label htmlFor="">{this.props.where}</label>
       <div>
          <span>{this.props.name}</span>
          <span onClick={this.props.click}>{this.props.locationname}, <span>IND</span></span>
          <p>{this.props.airport}</p>
       </div>
      </div>
    )
  }
}

export default LocationFinder;
