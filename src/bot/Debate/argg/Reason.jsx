import React, { Component } from 'react';
import {Button} from 'reactstrap';
import Style from './reason.module.scss';

export class Reason extends Component {

constructor(props) {
    super(props)

    this.state = {
        arg : 0 
    }
}

Talk() {
this.setState({
    arg: this.state.arg +1})
console.log(this.state.arg)
}

Rage() {
    this.setState ({
arg: 5

    })
}

Reset() {
    this.setState ({
arg: 0

    })
}


    render() {

return this.state.arg<1? 


(
<div className={Style.body}><br/>
*approching cliamte change sceptic* 
<br/> <br/>You feel an urge to change his mind but only see two introduction ahgead of you. 
<br/>Which one do you pick? 
<br/><br/>
<Button onClick={() => this.Talk()}>hi, I heard you believe it is debatable that the human caused emission of greenhouse gasses <br/> is the mian cause of the current warming of the globe</Button>
<br/>or?<br/><Button onClick={() => this.Rage()}> sup, stupid.</Button>
 </div> 
 )
    
    
    :   this.state.arg<2? 

(
<div className={Style.body}> <br/>
    sceptic :"I have no reason to blieve the climate doesnt just hgappen in cycles" 
    <br/><br/><br/><br/>
    <Button onClick={() => this.Talk()}> actually all past changes happen because of "Milankovitch cycles
".<br/> Recent change shows a direct correaltion between CO2 increase and ocean temperature increase. </Button>
    <br/>
    <Button onClick={() => this.Rage()}> Yeah, I bet. And you probably think <br/>
    *raises fingers for sarcastic qutation* "if we came from monkeys why do we have monkeys"</Button>
</div>
)

: this.state.arg <3 ?

    (<div className={Style.body}>

        <br/>
        Thats bullshit, we know volcanoes emit wayy more than people, how could people even matter
        <br/><br/><br/>
          <Button onClick={() => this.Talk()}>

            Actually *shows evidence* volcanoes emit less than 100th that people do <br/>
            and we know it is human emissions because of the isotope of carbon in the CO2.
        </Button>
        <br/>
        <Button onClick={() => this.Rage()}>did you read that in the sun or can you even read?</Button>
    </div>
    ) : 
    this.state.arg <4 ?
    (
    <div className={Style.flex}>
        <br/>
        YOU WIN! <br/><br/>
        <Button onClick={() => this.Reset()}>Restart?</Button>
        </div>
        )    :(<div className={Style.body}> Sceptic: <br/>"SO EVERYONE THAT HAS A DIFFERENT OPINION TO YOU IS STUOID?"
        <br/><br/>
        <Button onClick={() => this.Reset()}>Restart?</Button></div>);


           

            return ( 
                <div>
                <Button> press this for clarity</Button>
                </div>
            );
        }
 }
export default Reason
