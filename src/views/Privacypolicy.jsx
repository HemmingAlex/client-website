import React from "react";
import { Link, useHistory } from "react-router-dom";

import Style from "./Fiction.module.scss";

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
    UncontrolledTooltip
  } from "reactstrap";


  function Privacypolicy() {

  

    let history = useHistory();

        return ( 
            <div className={Style.ind}><container>
                <br/>
                <br/>
                <br/>
                <br/>
         
         

              
              
<container>       <h3>
<strong>Privacy policy </strong> 
<br/>
<br/> Any data collected will only be for the moderation of comments on this website. Or to increase sales of books
           </h3>   </container> </container><Button className={Style.centre} color="info" onClick={() => history.goBack()}>
              back <i class="fas fa-undo"></i></Button>   </div>
        )
    
}

export default Privacypolicy
