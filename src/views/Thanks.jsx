
import React, { Component, Col } from 'react'
import Gallery from "./Gallary.jsx";
import Style from "./Fiction.module.scss";
import {Container} from "reactstrap";

import Bird from "../assets/img/assets/Bird.png";

import Foot from "../components/Footers/DarkFooter";




const Thanks =() => {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  
      
  
  return (
            <div >
                <Gallery/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              
                <hr/>

                <br/>
                <br/>
                <br/>
                <container>
                <Container className={Style.centre}>
                    <h2 className={Style.s}>Special Thanks</h2>
                <img src={Bird} className={Style.sborder}/></Container>

<Container className={Style.sbody}> 
Thank you for taking the time to find out more about me. 
I am an avid reader and have decided to give my own take on my own stories.
 I cater to the harem lit genre and try to provide a quality product for those seeking a good story. 
 Writing is challenging and rewarding. I appreciate constructive feedback and am working on improving. 
At the end of my book is a discord and Facebook link, 
feel free to join me there if you have input or would like to chat.
</Container></container>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
               <Foot/>
            </div>
  );
  
  };
  
  
  
  
  


export default Thanks;
