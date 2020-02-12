import React, { Component } from 'react'
import {Container, Button} from 'reactstrap';
import Style from "./Fiction.module.scss";
import GOP1 from "../../assets/img/assets/GO1.jpg";
import FH2 from "../../assets/img/assets/Griff2.jpg"
import Fh3 from "../../assets/img/assets/GriffOne.jpg"

 class PaperBook extends Component {
    render() {


        return (
<div className={Style.wrap}>



            <Container>

            <div className={Style.box}>


                <Container className={Style.wrap}>
                    
                <img src={GOP1} className={Style.border}/>


                <h3>Augmented Tycoon (Game of Planets Book 1)</h3>
 

                <div  className={Style.body}> 
 
                The Universe is a vast place managed by millions of species known as the Onatics. Ancient rules have established how expansion, warfare, and immortality are governed. Our enlightened neighbors scorn us humans for failing to integrate and advance. Insert Mack… A young man whose main goal is to become a ZBall pro. An advanced Emperor marks Mack for greatness. All of a sudden his life is swirled into a series of combat situations, generated competitions, intricate business dealings…

</div>
<Button href="https://www.amazon.com/gp/product/B07Z5S29D6/ref=dbs_a_def_rwt_bibl_vppi_i2" target="_blank">Buy Paper Back</Button>


                </Container>


                <Container className={Style.wrap}>
                    <img src={Fh3} className={Style.border}/>


                  <h3>Gryff The Griffin Rider (Fantastic Harem Book 1)</h3>
 
                  <div  className={Style.body}> 
 
                  A fantasy tale of adventure, battle, love, lust, and excitement awaits. Gryff is a young man who had goals and dreams. They were rapidly ripped away from him in a spiraling series of events. Inserted on a new world, he must achieve a new path. Will you dare to quest with the hero? Download now to join Gryff in his exploits and feats.
 
 Warning contains gore with extreme violence; there is a harem and on occasion a sex scene!!!
 
</div> 
 <Button href="https://www.amazon.com/gp/product/B07YFWHDZX/ref=dbs_a_def_rwt_bibl_vppi_i1" target="_blank">Buy Paper Back</Button>

                </Container> 

                <Container className={Style.wrap}>  
                     <img src={FH2} className={Style.border}/>


<h3>Gryff the Griffin Rider 2 (A Fantastic Harem)</h3> 

<div  className={Style.body}> 

A fantasy tale of adventure, battle, love, lust, and excitement awaits. Gryff now calls Vin home.  Fernlan continues to grow with hard work and determination.
 
  There is much about himself he does not understand. One thing is certain, he is locked in an epic struggle against the Horde. Gryff is determined to focus on vital tasks, like staving off starvation. Warning contains gore with extreme violence; there is a harem and on   occasion a sex scene!!!
 
  </div> 
  
  <Button href="https://www.amazon.com/gp/product/B0811V977Q/ref=dbs_a_def_rwt_bibl_vppi_i0" target="_blank">Buy Paper Back</Button>

                </Container> 

                </div>


                </Container>

                
            </div>
        )
    }
}

export default PaperBook;
