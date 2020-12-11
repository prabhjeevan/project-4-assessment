import React from "react";
import "./CircleSelector.css";

function CircleSelector(props){
    return(
      
        <div className="CircleSelector">
          <button 
          className={ props.selected === '1' ? 'selected' : ''} 
          onClick={props.handleClick}value="1" >
           {props.selected === '1' ? 'Circle 1 Selected' : 'Select Circle 1'}
            </button>

          <button 
          className={ props.selected === '2' ? 'selected' : ''} 
          onClick={props.handleClick}value="2" >
           {props.selected === '2' ? 'Circle 2 Selected' : 'Select Circle 2'}
           </button>

          <button 
          className={ props.selected === '3' ? 'selected' : ''} 
          onClick={props.handleClick}value="3" >
           {props.selected === '3' ? 'Circle 3 Selected' : 'Select Circle 3'}
           </button>

          <button 
          className={ props.selected === '4' ? 'selected' : ''} 
          onClick={props.handleClick}value="4" >
           {props.selected === '4' ? 'Circle 4 Selected' : 'Select Circle 4'}
           </button>

        </div>
      
    )
  }

  export default CircleSelector;