import React, { Component } from "react";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";
import styles from "./Test.module.scss";
import { Nav, NavItem, NavLink } from 'reactstrap';
import {Collapse} from 'reactstrap';
import {Button} from 'reactstrap';

  
import {  useParams, useHistory } from 'react-router-dom';






export default class Test extends Component {




  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false
    });
  }

  render() {
      


    return (
      <OffCanvas
        width={300}
        transitionDuration={300}
        effect={"parallax"}
        isMenuOpened={this.state.isMenuOpened}
        position={"left"}
      >
        <OffCanvasBody
          className={styles.bodyClass}
          style={{ fontSize: "30px" }}
        ><div className={styles.right}>
           <a href="#" onClick={this.handleClick.bind(this)}>
           <i class="fas fa-chevron-left"></i></a> {"Open sidebar "}
           </div>


        </OffCanvasBody>






        <OffCanvasMenu className={styles.sfix}>
    
    
    
    <div className={styles.fix}>
      <br/>
      <br/>
      <br/>
      
      <br/>
      <br/>
      <br/>
      <Nav vertical>
      <NavItem className={styles.sbox}>
          
          <NavLink href="#" onClick={this.handleClick.bind(this)}> <div className={styles.right}><i class="far fa-window-close"></i></div> </NavLink>

        </NavItem><br/><br/><br/><br/>



        
        <NavItem className={styles.box}>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <br/>
        <br/>        
        <NavItem className={styles.box}>
          <NavLink href="/About-me">About-me <vr/></NavLink>
        </NavItem>
        <br/>
        <br/>

        <NavItem className={styles.box}>
          <NavLink href="/Blog">Blog</NavLink>
        </NavItem><br/> 
          
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </Nav>
      <hr />

    
    
    </div>
             
          
        </OffCanvasMenu>
      </OffCanvas>
    );
  }

  handleClick() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }
}