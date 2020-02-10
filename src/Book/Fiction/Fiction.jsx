import React from "react";
import {Container} from 'reactstrap';
import LandingPageHeader from "../../components/Headers/LandingPageHeader";
import Style from "./Fiction.module.scss";
import IndexNavbar from "../../components/Navbars/IndexNavbar"
import Read from '../../assets/img/assets/ReadThanks.jpg';

const Fiction =() => {


    

return (

<div>
<div><div>

<div className={Style.flex}>
<div> <img src={Read} className={Style.border}/></div>             
 <div className={Style.centre}>
   <div className={Style.blue}><h1>Marcus Sloss</h1></div>  

<h1><i>LATEST NEWS!</i></h1>

<p>Augmented Tycoon is now professionally edited.</p>
<p>Book 3 of Gryff the Griffin Rider is complete. Releasing 12-5-19</p>
<p>Exit Cover for Gryff 3 done.</p>
<p>New series being written!</p>
</div>
</div>

   <div className={Style.centre}> 
   <i class="fas fa-road"/>

   <br/><br/><br/><br/><br/><br/>
   <br/><br/><br/><br/><br/><br/>
   <br/><br/><br/><br/><br/><br/>
   <br/><br/><br/><br/><br/><br/>
   mate
   </div>
  </div>  

<i class="fas fa-road"/>
</div>

</div>




);

};





export default Fiction;