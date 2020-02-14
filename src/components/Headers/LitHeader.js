import React from "react";
import Background from "../../assets/img/write.jpg";
import Styles from "./land.module.scss" 
// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();
  let counter = 7;

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <> <div className={Styles.background}>
      <div className="page-header page-header-small">
        <div
          className={Styles.body}
          
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className={`"title${Styles.shiny}`}> Marcus Sloss <br/> <br/>
            <br/>
            Max Geek</h1>
            <div className="text-center">
              <Button
                className="btn-icon btn-round"
                color="info"
                href="https://www.facebook.com/marcus.sloss.524"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
             
            
            </div>
          </Container>
        </div>
      </div></div>
    </>
  );
}

export default LandingPageHeader;
