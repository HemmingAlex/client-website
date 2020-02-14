import React from "react";
import {Col, 
  Row,
  Container
} from 'reactstrap';
import LandingPageHeader from "../../components/Headers/LandingPageHeader";
import Style from "./Fiction.module.scss";
import IndexNavbar from "../../components/Navbars/IndexNavbar"
import Nav from "../../components/Navbars/ExamplesNavbar"; 
import Read from '../../assets/img/assets/ReadThanks.jpg';
import Head from "../../components/Headers/LitHeader";
import Carosel from "./carosel";
import Tab from "./LitTab";
import News from "./LatestNews.jsx";
import Paper from "./PaperBook.jsx";
import Sectab from "./Sectab";



const Fiction =() => {


    

return (

<div className={Style.background}>
  <Nav/><Head/>
  <div className={Style.wrap}>
    <Container>


      <div className={Style.sbox}> <Col>
      <img src={Read} className={Style.border}/>
        <News/></Col>
    </div>
  </Container>

  </div>


    <div className={Style.centre}> 
      <i class="fas fa-road"/>
  </div>

  {/*<Paper className={Style.box}/>*/}
  <container className={Style.min}>
  <Tab/>
  <Sectab/>
</container> </div>
);

};





export default Fiction;