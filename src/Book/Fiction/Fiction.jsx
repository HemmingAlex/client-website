import React from "react";
import {Container} from 'reactstrap';
import LandingPageHeader from "../../components/Headers/LandingPageHeader";
import Style from "./Fiction.module.scss";
import IndexNavbar from "../../components/Navbars/IndexNavbar"
import Nav from "../../components/Navbars/ExamplesNavbar"; 
import Read from '../../assets/img/assets/ReadThanks.jpg';
import Head from "../../components/Headers/LitHeader";
import Carosel from "./carosel";
import Tab from "./LitTab";

import Paper from "./PaperBook.jsx";

const Fiction =() => {


    

return (


<div className={Style.background}>
  <Nav/>
<Head/> 
<div className={Style.wrap}>
 <Container>
<div className={Style.flex}> 

<img src={Read} className={Style.border}/>

<Container>
  <h1 className={Style.blue}>Marcus Sloss</h1>  

<h1><i>LATEST NEWS!</i></h1>

<p>Augmented Tycoon is now professionally edited.
Book 3 of Gryff the Griffin Rider is complete. Releasing 12-5-19
Exit Cover for Gryff 3 done.
New series being written!</p>

</Container>

</div>

 </Container>

   </div>

   <div className={Style.centre}> 
   <i class="fas fa-road"/>
 </div>

 <Paper/>
<Tab/> 
  </div>  






);

};





export default Fiction;