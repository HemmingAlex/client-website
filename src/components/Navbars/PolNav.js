import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Collapse} from 'reactstrap';
import Style from './navbar.module.scss';
import {Button} from 'reactstrap';

  
import {  useParams, useHistory } from 'react-router-dom';




const PolNav = (props) => {

let page = useParams();
let history = useHistory();

return (
    <div className={Style.fix}> 
    <br/><br/>
      <p>NavBar</p><br/>
      <Nav vertical>
      <NavItem>
          <span>  </span>
        </NavItem>
        <NavItem className={Style.box}>
          <NavLink href="/">Home</NavLink>
        </NavItem>

        <NavItem>
          <NavLink disabled href="#"></NavLink>
        </NavItem>
        <NavItem className={Style.box}>
          <NavLink href="/Intro">intro</NavLink>
        </NavItem><br/>
        <NavItem className={Style.box}>
          <NavLink href="#">b</NavLink>
        </NavItem><br/>
        <NavItem className={Style.box}>
          <NavLink href="#">b</NavLink>
        </NavItem>
      </Nav>
      <hr />

      <Button color="info" onClick={() => history.goBack()}>
back?    </Button>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default PolNav;