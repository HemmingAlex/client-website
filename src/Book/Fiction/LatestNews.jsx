import React, { Component } from 'react'
import Style from "./Fiction.module.scss";



 class LatestNews extends Component {
    render() {
        return (
            <div className={Style.wide}> 
                  <h1 className={Style.blue}>Marcus Sloss</h1>  

<h1><i>LATEST NEWS!</i></h1>

<p>Augmented Tycoon is now professionally edited.
Book 3 of Gryff the Griffin Rider is complete. Releasing 12-5-19
Exit Cover for Gryff 3 done.
New series being written!</p>
            </div>
        )
    }
}

export default LatestNews;
