import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

import ReactDOM from 'react-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';


function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);



  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });



  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">

      
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Alexander Hemming</h2>
                <h5 className="description">
Politics, fiction, frontend development. (maybe some drawings/photoshop)
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/write.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                    Part of this website is a an author's book template and a Blog template. 
                    It should be using some shildhood stories to give an example of hwo an author could have their wesbite.
<br/>
                      <small>-The works of Alexander Hemming</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/tech.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/ossy.jpg") + ")"
                    }}
                  ></div>
                
  <h3>
                   

                   Above is my current office, the location of my work at Cirostratus and the location I built a significant amount of this website! (sorry). 
                  </h3>
                  <p>
Coding has been a passion of mine since I started to learn 2 years ago, it is pretty simple as you can literally google anything. Thouhg i dont quite understand how to use thr react tools with event listeners.               </p>
                  <p>
                  React is ridiculously easy and fun to mess around with, it makes vanilla javascript look pointless.
                  </p>
                  <p>
                   My dream is to be in an office with people slightly closer to my age, have a decent social life and earn a decent amount of money from doing something simple like React programming.
                    
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">

        </div>
        <div className="section section-contact-us text-center">
         
        </div>
        <DefaultFooter/>
      </div>
    </>
  );
}

export default LandingPage;
