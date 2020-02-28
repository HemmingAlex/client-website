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
      <br/>
      <br/>
      <br/>
      
      <br/>
      <br/>
      <br/>
      <p><strong> </strong></p>
      <Nav vertical>
      <NavItem>
          <span>  </span>
        </NavItem><br/><br/><br/><br/>


        <NavItem className={Style.box}>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <br/>
        <br/>        
        <NavItem className={Style.box}>
          <NavLink href="/About-me">About-me <vr/></NavLink>
        </NavItem>
        <br/>
        <br/>

        <NavItem className={Style.box}>
          <NavLink href="/Blog">Blog</NavLink>
        </NavItem><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </Nav>
      <hr />

      <Button color="primary" onClick={() => history.goBack()}>
Back    </Button>
    
    </div>
  );
}

export default IndexNavbar;