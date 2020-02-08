import React, { Component } from 'react';
import {UncontrolledTooltip} from 'reactstrap';


let a = <span>Intolerance to ambiguity</span>;
let b = <span>Entitlment to equality</span>;
let c = <span>Entitlment to individual rights</span>;
let d = <span>Cause of Absolute philosophies.</span>;
let e = <span>The effect of Cognitive dissonance on politics.</span>;
let f = <span >The most interestring modern studies and experiments.</span>;



let num = 0;

 class Tooltips extends Component {

    constructor(props) {
        super(props)    
        this.state = { num: 0 };
        this.kick =this.kick.bind(this);
    }


   kick() {
        this.setState( state =>
            ({
                num: this.state.num +1
            
        }));
        if (this.state.num>5) {this.state.num=0;}
    }
           

    render() {

    const things = [a,b,c,d,e,f];


        return (
            <div>
                {things[this.state.num]}<br/>
                <button onClick={this.kick}> change it</button>
            


                </div>
        );
    }
}

export default Tooltips;
