import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import LocationFinder from './components/location/location';
import PlanDate from './components/plan/plan';
import Travellers from './components/travlleres/travellers';
import FindLocation from './components/layers/findlocation';
class App extends React.Component{

    state= {
      isOpen:false
    }

  openLayer = () => {
    alert("isOpen");
    const isDraw = this.state.isOpen;
    this.setState({
     isOpen: !isDraw
    })

  }

  render() {
    const style={
      display: "block"
    }

    return(
      <div>
         <header>Search Widget</header>
         <p>{this.state.isOpen}</p>
         <div className="new-flex">
           <LocationFinder where="From" name="BOM" airport="CSI Airport" locationname="Mumbai" click={this.openLayer}/>
           <LocationFinder where="To" name="DEL" airport="IGI Airport" locationname="New Delhi" click={this.openLayer} />
         </div>
         <div className="new-flex">
           <PlanDate title="Depature"></PlanDate>
           <PlanDate title="Return"></PlanDate>
         </div>
         <div className="new-flex">
           <Travellers title="Travellers"></Travellers>
         </div>

        {
          this.state.isOpen === true ?

            <FindLocation style={style}/>
          :null

        }
      </div>
    )
  }
}


ReactDOM.render(
  <App/>,
   document.getElementById('root')
);
