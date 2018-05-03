import React,{Component} from 'react';
import './layer.css';
class FindLocation extends Component{
  render(){
    return(
      <div className="auto_wrapper">
         <div className="auto_complete">
            <div className="auto_complete_search">
               <input type="text"/>
            </div>
            <ul>
             <li><span><strong>Boston</strong>USA</span></li>
             <li><span><strong>NewDelhi</strong>USA</span></li>
             <li><span><strong>Melbourne</strong>USA</span></li>
             <li><span><strong>Boston</strong>USA</span></li>
             <li><span><strong>Boston</strong>USA</span></li>
             <li><span><strong>Boston</strong>USA</span></li>
            </ul>
         </div>
      </div>
    )
  }
}

export default FindLocation;
