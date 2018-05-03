import React,{Component} from 'react';
// import './location.css';
// import './traveller.css';

class Travellers extends Component{
  // constructor(props){
  //   super(props);
  // }

   render(){
     return(
      <section>
         <label htmlFor="">{this.props.title}</label>
         <section className="traveller-c">
           <div className="sc">
              <strong>2</strong>
              <span>adults</span>
           </div>
           <div className="sc">
              <strong>2</strong>
              <span>Children</span>
           </div>
           <div className="sc">
              <strong>2</strong>
              <span>infants</span>
           </div>
           <div className="sc">
              <strong>EC</strong>
              <span>Class</span>
           </div>
         </section>
      </section>
     )
   }
}


export default Travellers;
