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
import GOP1 from "../../assets/img/assets/GO1.jpg";
import FH2 from "../../assets/img/assets/Griff2.jpg"
import Fh3 from "../../assets/img/assets/GriffOne.jpg"

// core components

function LitTab() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Tabs with Icons on Card</p>
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
                        Augmented Tycoon
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
                        Griff book 1
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
                        <i className="now-ui-icons shopping_shop"></i>
                        Giriff book 2   
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
                        <i className="now-ui-icons ui-2_settings-90"></i>
                        Settings
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

                        <div className={Style.flex}>
                    <img src={GOP1} className={Style.border}/>

<Container>
<h3>Augmented Tycoon (Game of Planets Book 1)</h3>


<div  className={Style.body}> 

The Universe is a vast place managed by millions of species known as the Onatics. Ancient rules have established how expansion, warfare, and immortality are governed. Our enlightened neighbors scorn us humans for failing to integrate and advance. Insert Mack… A young man whose main goal is to become a ZBall pro. An advanced Emperor marks Mack for greatness. All of a sudden his life is swirled into a series of combat situations, generated competitions, intricate business dealings…

</div>
<Button href="https://www.amazon.com/gp/product/B07Z5S29D6/ref=dbs_a_def_rwt_bibl_vppi_i2" target="_blank">Buy Paper Back</Button>


</Container></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                    <img src={Fh3} className={Style.border}/>


<h3>Gryff The Griffin Rider (Fantastic Harem Book 1)</h3>

<div  className={Style.body}> 

A fantasy tale of adventure, battle, love, lust, and excitement awaits. Gryff is a young man who had goals and dreams. They were rapidly ripped away from him in a spiraling series of events. Inserted on a new world, he must achieve a new path. Will you dare to quest with the hero? Download now to join Gryff in his exploits and feats.

Warning contains gore with extreme violence; there is a harem and on occasion a sex scene!!!

</div> 
<Button href="https://www.amazon.com/gp/product/B07YFWHDZX/ref=dbs_a_def_rwt_bibl_vppi_i1" target="_blank">Buy Paper Back</Button>


                    </TabPane>
                    <TabPane tabId="iconPills3">
                      
                     <img src={FH2} className={Style.border}/>


<h3>Gryff the Griffin Rider 2 (A Fantastic Harem)</h3> 

<div  className={Style.body}> 

A fantasy tale of adventure, battle, love, lust, and excitement awaits. Gryff now calls Vin home.  Fernlan continues to grow with hard work and determination.
 
  There is much about himself he does not understand. One thing is certain, he is locked in an epic struggle against the Horde. Gryff is determined to focus on vital tasks, like staving off starvation. Warning contains gore with extreme violence; there is a harem and on   occasion a sex scene!!!
 
  </div> 
  
  <Button href="https://www.amazon.com/gp/product/B0811V977Q/ref=dbs_a_def_rwt_bibl_vppi_i0" target="_blank">Buy Paper Back</Button>

               
                    </TabPane>
                    <TabPane tabId="iconPills4">
                      <p>
                       (other books)
                      </p>
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

export default LitTab;
