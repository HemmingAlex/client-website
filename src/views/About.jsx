import React, { Component } from 'react'
import Style from "./Fiction.module.scss";
import { Container } from "reactstrap";



export class About extends Component {
    render() {
        return ( 
        
        <div>
            
<hr/>
            <br/>
           
               <h1 className={Style.centre}> About Me</h1>
                <br/>
                <br/><Container className={Style.sbody}>
              I write for the joy of writing. This has been something I attempted to do for years. 
                I have always written bits here, and open chapters there.
                 When I sat down with Gryff I gave it the full Sloss spirit. 
                 I grinded up to fourteen hours a day working to get that book out. 
                 I had no idea if it was a dud, decent, or not half bad. 
                 I read that book at least ten times. 
                 I still love it to this day. 
                 Now I feel whatever block was inhibiting me is gone and I can write easily.
                  I hope you enjoy what I release and you can always reach out to me with your feedback.

                  <br/>
                  <br/>
                  <br/>

</Container>
            </div>
        )
    }
}

export default About
