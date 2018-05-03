import React, {Component} from 'react';
// import './location.css';

class PlanDate extends Component{
  // constructor(props) {
  //   super(props);
  // }

  render(){
    return(
      <div>
         <label htmlFor="">{this.props.title}</label>
         <div>
            <span>{this.props.name}</span>
            <span>{this.props.locationname}, <span>IND</span></span>
            <p>{this.props.airport}</p>
         </div>
      </div>
    )
  }
}

export default PlanDate;
