import React, { Component } from 'react'
import Style from "./views/Fiction.module.scss";



 class LatestNews extends Component {
    render() {
        return (
            <div> <br/><br/>
                  <h1 className={Style.blue}>Marcus Sloss</h1>  

<h1><i>LATEST NEWS!</i></h1>

<h4>CyberViking is half way done, here is the cover. <br/>   
    Audiobooks are in production with Gryff needing approval from ACX. 
    Logan 3 releases 3/6/20.</h4>
            </div>
        )
    }
}

export default LatestNews;
