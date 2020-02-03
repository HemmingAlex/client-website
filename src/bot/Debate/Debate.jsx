import React, { Component } from 'react';
import ReactDOM from "react-dom";

function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div>
        Warning!
      </div>
    );
  }
  
  class Debate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(state => ({
        showWarning: !state.showWarning
      }));
    }

    
  
    render() {
      return (
        <div><div>pick the right answers to gain the prize! <br/> <br/> <br/>

        
        </div>

          <WarningBanner warn={this.state.showWarning} />

          hi

          <button onClick={this.handleToggleClick}>

            {this.state.showWarning ? 'correct' : 'wrong'}
          </button>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Debate />,
    document.getElementById('root')
  );

  export default Debate;