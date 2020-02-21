import React, { Component } from 'react'
import Style from "./views/Fiction.module.scss";



 class LatestNews extends Component {
    render() {
        return (
            <div> <br/><br/>
                  <h1 className={Style.blue}>Marcus Sloss</h1>  

<h1><i>LATEST NEWS!</i></h1>

<p>The audible releases are comming soon!</p>
            </div>
        )
    }
}

export default LatestNews;
