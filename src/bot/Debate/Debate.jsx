import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Style from "./debate.module.scss";
import Condition from './Condition';
import Reason from './argg/Reason';
  


let a = "if ";
let you = "you ";
let keep = "keep ";
let pressing = "pressing ";

let will = "will ";
let win= "win ";


let q = 0;



//if the property is not present then show this, else this

  // constructor bings the click to the clicked. and state = x
  class Debate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {x: true};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  // state = props, if click get rid of state
    handleToggleClick()  { 
      this.setState( state => ({
        x: !state.x
      }));

   
       q = q+1;
       if (q>7) {q =0;}
    
    }

    
  /// in the props warn props becomes dependant ont he state.

    render() {

      const answers = [a, you, keep, pressing, you, will, win];

      return (
        <div><div>pick the right answers to gain the prize! <br/> <br/> <br/>

        
        </div>


          
{answers[q]} <br/>
          <button onClick={this.handleToggleClick}>
this is "

          </button>


  <Condition peng={this.handleToggleClick}/>
<p className="blockquote blockquote-info">
  <Reason/> </p>
        </div>
      );
    }
  }


  export default Debate;
