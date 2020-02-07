import React, { Component } from 'react'

class Condition extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             pengwings: false
        }
    }
    

    render() { 

        return this.state.pengwings ? 
        (
    <div> where you at cumberbach</div>)

     :     (  
            <div>mmmmm chicken </div>)
    }
        
}

export default Condition
