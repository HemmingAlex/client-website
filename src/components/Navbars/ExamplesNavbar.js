import React from "react";
import { Link, useHistory } from "react-router-dom";


import styles from "./navbar.module.scss";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip, 
  Blog
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  let history = useHistory();

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("white");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="white" expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={e => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>


            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem header tag="a">
                Menue
              </DropdownItem>


           

              <DropdownItem divider href="/About-me">
              <div className={styles.shiny}>
                   
                   <span>About-me </span> </div>
                        </DropdownItem>

                        <DropdownItem  href="/Gallery">
              <div className={styles.shiny}>
                   
                   <span>Gallery </span> </div>
                        </DropdownItem>


                <DropdownItem href="/">
               
                    <div className={styles.shiny}>
                   
                    <span>Home </span> </div>
             
              </DropdownItem>


                
                  <DropdownItem href="/About-me" onClick={console.log("click")}>
                   
                      <span className={styles.shiny}> About-me</span>

                        </DropdownItem>


            </DropdownMenu>




          </UncontrolledDropdown>



          <div className="navbar-translate">
            <NavbarBrand
              href="www.google.com/bootstrap4"
              target="_blank"
              id="navbar-brand"
            >
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
Welcome      </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
         <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
         > 
            <Nav navbar>
               <NavItem>
                <NavLink to="/About-me" tag={Link}>
About-me               </NavLink>

              </NavItem>
              <NavItem>
                <NavLink to="/Gallery" tag={Link}>
Gallery                </NavLink>
              </NavItem>
           

              



              <NavItem>
                <NavLink to="/" tag={Link}>
Home
                  </NavLink>
              </NavItem>


          



              <NavItem>
                <NavLink
                  href="https://www.facebook.com/marcus.sloss.524"
                  target="_blank"
                  id="facebook-tooltip"
                  >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                 Say hi on facebook!
                </UncontrolledTooltip>
                
              </NavItem>
              
            </Nav>
          </Collapse>


        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
