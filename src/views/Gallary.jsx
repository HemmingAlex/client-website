import React, { Component } from 'react'
import { render } from 'react-dom';
import {Container} from "reactstrap";


import Gallery from 'react-grid-gallery';

import Nav from "../components/Navbars/ExamplesNavbar"; 
import Style from "./Fiction.module.scss";
import Head from "../components/Headers/LitHeader";

import About from "./About.jsx";

import Read from '../assets/img/assets/ReadThanks.jpg';
import One from '../assets/img/assets/One.jpg';
import Two from '../assets/img/assets/Two.jpg';
import Three from '../assets/img/assets/Three.jpg';
import Four from '../assets/img/assets/Four.jpg';
import Five from '../assets/img/assets/Five.jpg';
import Six from '../assets/img/assets/Six.jpg';
import Seven from '../assets/img/assets/Seven.png';
import Eight from '../assets/img/assets/Eight.jpg';
import Nine from '../assets/img/assets/Nine.jpg';
import Eleven from '../assets/img/assets/Eleven.jpg';
import Twelve from '../assets/img/assets/Twelve.jpg';
import Thirteen from '../assets/img/assets/Thirteen.jpg';
import Fourteen from '../assets/img/assets/Fourteen.jpg';
import Fifteen from '../assets/img/assets/Fifteen.jpg';
import Sixteen from '../assets/img/assets/Sixteen.jpg';
import Seventeen from '../assets/img/assets/Seventeen.jpg';
import Map5 from '../assets/img/assets/MapS.jpg';
import Thanks from "../assets/img/assets/Thanks.jpg";


const IMAGES =
[{
        src: Read,
        thumbnail: Read,
        thumbnailWidth: 174,
        thumbnailHeight: 174,
},{
    src: One,
    thumbnail: One,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Two,
    thumbnail: Two,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Three,
    thumbnail: Three,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Four,
    thumbnail: Four,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Five,
    thumbnail: Five,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Six,
    thumbnail: Six,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Seven,
    thumbnail: Seven,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Eight,
    thumbnail: Eight,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Eleven,
    thumbnail: Eleven,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Twelve,
    thumbnail: Twelve,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Thirteen,
    thumbnail: Thirteen,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Fourteen,
    thumbnail: Fourteen,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},
{
    src: Thanks,
    thumbnail: Thanks,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Fifteen,
    thumbnail: Fifteen,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},{
    src: Sixteen,
    thumbnail: Sixteen,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Seventeen,
    thumbnail: Seventeen,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Map5,
    thumbnail: Map5,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},{
    src: Nine,
    thumbnail: Nine,
    thumbnailWidth: 174,
    thumbnailHeight: 174,
},]

class Gallary extends Component {
    render() {
        return (
            <div className={Style.Dark}>
<Nav/><br/>
<br/>
<br/>

<Head/>
<br/>   
<br/>
<br/><br/>
<br/>

<br/><br/>
<br/><br/>
<br/><br/>
<br/><br/>
<About/>
<hr/>
<div>  
    <h1 className={Style.centre}>Gallery</h1>
    <br/>
    

    <Gallery images={IMAGES} className={Style.Dark}/>
</div>
<br/>

            </div>
        )
    }
}

export default Gallary
