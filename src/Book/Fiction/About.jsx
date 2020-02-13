import React, { Component } from 'react'
import Style from "./Fiction.module.scss";



export class About extends Component {
    render() {
        return (
            <div>
               <h1 className={Style.centre}> About Me</h1>
                <br/>
                <br/><container className={Style.body}>
A max nerd with a serious book writing ambition.</container>
            </div>
        )
    }
}

export default About
