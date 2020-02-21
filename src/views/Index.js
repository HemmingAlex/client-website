import React from "react";
  import {Col, 
    Row,
    Container
  } from 'reactstrap';
  import LandingPageHeader from "../components/Headers/LandingPageHeader";
  import Style from "./Fiction.module.scss";
  import IndexNavbar from "../components/Navbars/IndexNavbar"
  import Nav from "../components/Navbars/ExamplesNavbar"; 
  import Read from '../assets/img/assets/ReadThanks.jpg';
  import Head from "../components/Headers/LitHeader";
  import Tab from "./LitTab";
  import News from "../LatestNews.jsx";
  import Paper from "./PaperBook.jsx";
  import Sectab from "./Sectab";
  

  import Foot from "../components/Footers/DarkFooter";


const Index =() => {
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
  </container> <Foot/> </div>
  );
  
  };
  
  
  
  
  


export default Index;
