import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

import Style from "./Fiction.module.scss";


import L1 from "../assets/img/assets/L1.jpg";
import L2 from "../assets/img/assets/L2.jpg";
import Lev1 from "../assets/img/assets/Lev1.jpg";
import Fin from "../assets/img/assets/FinalB.jpg";



// core components (the labels make no sense)

function Sectab() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="100">
              <p className="category">Lacky</p>
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons objects_umbrella-13"></i>
                        The Lackey's War Book 1
                                              </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="now-ui-icons shopping_cart-simple"></i>
                        The Lackey's War Book 2
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        <i className="now-ui-icons shopping_cart-simple"></i>
                        The Lackey's War Book 3
                      </NavLink>
                    </NavItem>
                    <NavItem> 
                      <NavLink
                        className={iconPills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("4");
                        }}
                      >
                        <i className="now-ui-icons shopping_shop"></i>
                        Levity
                        </NavLink>
                    </NavItem>
                   


                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                   
                    <TabPane tabId="iconPills1">
                      
                      <div className={Style.fbox}>
                      <container>

                    <img src={L1} className={Style.border}/>

                    </container>
                    <container className={Style.padding}>
                      
<h3 className={Style.blue}>Logan and the Cartographer's Lackey </h3>

<div  className={Style.body}> 

Kyroo is a vast world to which many species call home. 
A mysterious curse rapidly sprawls forth every night as
 the twin moons vanish behind a curtain of eternal darkness.
  The unknown magic is rising demons from the depths of the 
  planet that are praying on the unsuspecting. The Kyroo Kingdom 
  is struggling
 to understand what has transpired as maps, texts, and many memories 
 are now blank.<br/><br/>

 Logan loves the quiet farm life, even the endless hard work.
  The young man has a natural skill and passion for all things archery. 
  As the curse affects his family, Logan thirsts for knowledge about what 
  is happening and leaves his farm. He journeys to Narree where he meets Riya;
   a farm girl just as determined and resolute to adventure as Logan is. They
    decide to brave the curse, fight the demons of the night, and help by 
    redrawing lost maps. 
 Join them as they explore, fight, and navigate the world of Kyroo.

</div> 
<Button className={Style.button} href="https://www.amazon.com/gp/product/B0844PWKJG?notRedirectToSDP=1&ref_=dbs_mng_calw_1&storeType=ebooks" target="_blank">purchase here</Button>

                    </container></div>


                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <div className={Style.fbox}>

                        <container><img src={L2} className={Style.border}/></container>
                     

<container className={Style.padding}>
<h3 className={Style.blue}>Logan and the Lackey's Lancers</h3> 

<div  className={Style.body}> 
The adventure continues as Logan and Riya race to save the besieged dwarves. 
They will strategize with Poni and the elves as Kyroo braces for an incoming 
invasion of epic proportions. With magic unlocked and the curse lifted there 
are infinite possibilities for the duo to achieve. <br/>
Join them as they travel the lands, battle the beasts, and try to save humanity!
 
  </div> 
  
  <Button className={Style.button} href="https://www.amazon.com/gp/product/B0811V977Q/ref=dbs_a_def_rwt_bibl_vppi_i0" target="_blank">purchase here</Button>

         </container>         </div>
                    </TabPane>


 <TabPane tabId="iconPills3">
                    <div className={Style.fbox}>

<container><img src={Fin} className={Style.border}/></container>


<container className={Style.padding}>
<h3 className={Style.blue}>Logan and the Lackey's Realm</h3> 

<div  className={Style.body}> 

The fourth realm soars into the sky. A divine creation of the gods to weather 
the coming invasion. Logan, Riya, and his family are faced with many tough choices as
 the gods meddle. Join them as the adventure continues to find out how it all ends


</div> 

<Button className={Style.button} href="https://www.amazon.com/gp/product/B0829FNB4Q/ref=dbs_a_def_rwt_bibl_vppi_i5" target="_blank">purchase here</Button>

</container>       
  </div>
                    </TabPane>

                    <TabPane tabId="iconPills4">
                    <div className={Style.fbox}>

<container><img src={Lev1} className={Style.border}/></container>


<container className={Style.padding}>
<h3 className={Style.blue}>Levity</h3> 

<div  className={Style.body}> 

Growing up on a space station designed to terraform a planet is hard. 
The endeavor is more difficult when your mother dies saving everyone 
on board. Levi dedicated his life to following in his mother's footsteps
 of power solutions. He applies his knowledge to design a new engine that 
 actually works! This reduction in flight time attracts investors which leads 
 to the keen interest of outside governments. 
Suddenly Levi's life is embroiled in spies, enemy armadas, and fitting for his freedom.
<br/><br/>
Note - early YA work. No squeal is anticipated.


</div> 

<Button className={Style.button} href="https://www.amazon.com/gp/product/B0829FNB4Q/ref=dbs_a_def_rwt_bibl_vppi_i5" target="_blank">purchase here</Button>

</container>       
  </div>
                    </TabPane>

                    
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
           
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Sectab;
