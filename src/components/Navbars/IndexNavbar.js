import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Collapse} from 'reactstrap';
import Style from './navbar.module.scss';
import {Button} from 'reactstrap';

  
import {  useParams, useHistory } from 'react-router-dom';




const IndexNavbar = (props) => {

let page = useParams();
let history = useHistory();

return (
    <div className={Style.fix}>
      <p>NavBar</p>
      <Nav vertical>
      <NavItem>
          <span>  </span>
        </NavItem><br/><br/><br/><br/>
        <NavItem className={Style.box}>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <br/>
        <NavItem>
          <NavLink disabled href="#"></NavLink>
        </NavItem>
        <NavItem className={Style.box}>
          <NavLink href="#">Chapter 1</NavLink>
        </NavItem><br/>
        <NavItem className={Style.box}>
          <NavLink href="#">Chapter 2</NavLink>
        </NavItem><br/>
        <NavItem className={Style.box}>
          <NavLink href="#"></NavLink>
        </NavItem><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </Nav>
      <hr />

      <Button color="info" onClick={() => history.goBack()}>
back?    </Button>
    
    </div>
  );
}

export default IndexNavbar;