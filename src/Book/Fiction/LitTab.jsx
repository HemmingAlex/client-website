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

import FH3 from "../../assets/img/assets/Griff3.jpg";
import Fh4 from "../../assets/img/assets/Book4.jpg";


// core components (the labels make no sense)

function LitTab() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="100">
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
                        Fantastic Harem 1
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
                       Fantastic Harem 2
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
                        Fantastic Harem 3
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
                       Fantastic Harem 4 
                      </NavLink>
                    </NavItem>
{/* added in nav item
*/}
                    <NavItem>
                      <NavLink
                        className={iconPills === "5" ? "active" : ""}
                        href="#whoispablo"
                        onClick={e => {
                          e.preventDefault();
                          setIconPills("5");
                        }}
                      >
                        <i className="now-ui-icons objects_umbrella-13"></i>
 Augmented Tycoon

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
                      
                      <div className={Style.box}>
                      <container>

                    <img src={Fh3} className={Style.border}/>

                    </container>
                    <container className={Style.padding}>
                      
<h3 className={Style.blue}>Gryff The Griffin Rider (Fantastic Harem Book 1)</h3>

<div  className={Style.body}> 

A fantasy tale of adventure, battle, love, 
lust, and excitement awaits. Gryff is a young man
 who had goals and dreams. They were rapidly ripped 
 away from him in a spiraling series of events. Inserted
  on a new world, he must achieve a new path. Will you dare
   to quest with the hero? Download now to join Gryff in his 
   exploits and feats.<br/>

Warning contains gore with extreme violence;
 there is a harem and on occasion a sex scene!!!

</div> 
<Button className={Style.button} href="https://www.amazon.com/gp/product/B07YFWHDZX/ref=dbs_a_def_rwt_bibl_vppi_i1" target="_blank">Buy Paper Back</Button>

                    </container></div>


                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <div className={Style.box}>

                        <container><img src={FH2} className={Style.border}/></container>
                     

<container className={Style.padding}>
<h3 className={Style.blue}>Gryff the Griffin Rider 2 (A Fantastic Harem)</h3> 

<div  className={Style.body}> 

A fantasy tale of adventure, battle, love, lust, 
and excitement awaits. Gryff now calls Vin home. 
 Fernlan continues to grow with hard work and determination.,<br/>
 
  There is much about himself he does not understand. 
  One thing is certain, he is locked in an epic struggle 
  against the Horde. Gryff is determined to focus on vital 
  tasks, like staving off starvation. Warning contains gore
   with extreme violence; there is a harem and on  
    occasion a sex scene!!!
 
  </div> 
  
  <Button className={Style.button} href="https://www.amazon.com/gp/product/B0811V977Q/ref=dbs_a_def_rwt_bibl_vppi_i0" target="_blank">Buy Paper Back</Button>

         </container>         </div>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                    <div className={Style.box}>

<container><img src={FH3} className={Style.border}/></container>


<container className={Style.padding}>
<h3 className={Style.blue}>Gryff the Griffin Rider 3 (A Fantastic Harem)</h3> 

<div  className={Style.body}> 

Gryff is racing to free Vin from the Horde. The peace accords are 
gone and epic battles await. Gryff is motivated by his mother Lily
the Goddess of Magic to cleanse the Horde with insider tactics.
Adventure with Gryff as he strives to save Vin and the Universe!

</div> 

<Button className={Style.button} href="https://www.amazon.com/gp/product/B0829FNB4Q/ref=dbs_a_def_rwt_bibl_vppi_i5" target="_blank">Buy Paper Back</Button>

</container>       
  </div>
                    </TabPane>


                    {/* start of edit*/} 

                    <TabPane tabId="iconPills4">
                    <div className={Style.box}>

<container><img src={Fh4} className={Style.border}/></container>


<container className={Style.padding}>
<h3 className={Style.blue}>Gryff The Gaming Adventurer (A Fantastic Harem Book 4) </h3> 

<div  className={Style.body}> 
WARNING - This book contains intense sex scenes. 
A harem, threesomes, foursomes, and sexy monster girls.
<br/>
Gryff made the ultimate sacrifice to save those he cherished. 
Banished into purgatory for two years, his only companion was a 
five-headed hydra that spoke Horde. Grateful to be alive, Gryff 
is sprung from his prison and set upon a place most know as the Master 
Universe. Some call it the Warring Verse. Gryff discovers there are levels 
and the overlord god regulates magic to orbs. With a new lease on life, 
Gryff adventures in the Gaming Verse on his quest to return home.

</div> 

<Button className={Style.button} href="https://www.amazon.com/gp/product/B0849LPTKR/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0" target="_blank">Buy Paper Back</Button>

</container>         </div>
                    </TabPane>


                    {/* end of edit*/} 


                    <TabPane tabId="iconPills5">

<div className={Style.box}>
<container>       
<img src={GOP1} className={Style.border}/>


</container>

<Container className={Style.padding}>
<h3 className={Style.blue}>Augmented Tycoon (Game of Planets Book 1)</h3>


<div  className={Style.body}> 

The Universe is a vast place managed by millions of species 
known as the Onatics. Ancient rules have established how expansion, 
warfare, and immortality are governed. Our enlightened neighbors scorn 
us humans for failing to integrate and advance. Insert Mack… A young man
 whose main goal is to become a ZBall pro. An advanced Emperor 
 marks Mack for greatness. All of a sudden his life is swirled into 
 a series of combat situations, generated competitions, intricate 
 business dealings…

</div>

<Button className={Style.button} href="https://www.amazon.com/gp/product/B07Z5S29D6/ref=dbs_a_def_rwt_bibl_vppi_i2" target="_blank">Buy Paper Back</Button>

</Container>



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

export default LitTab;
