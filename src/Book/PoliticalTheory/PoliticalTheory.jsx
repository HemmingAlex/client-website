import React, {useState} from "react";
import {
  Container,   
  UncontrolledTooltip, 
  
} 
from 'reactstrap';
import Style from "./Fiction.module.scss";
import IndexNavbar from "../../components/Navbars/PolNav";
import Footer from "../../components/Footers/DarkFooter";

const PoliticalTheory =() => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

    

return (

<div>
       

<div className={Style.flex}>
  <div className={Style.shader}>
    <div className={Style.fix}>
 <IndexNavbar/></div> </div>
<div className={Style.background}>   
 <div className={Style.body}> 



<div className={Style.header}>
  <br/>
<div className="title"> <strong>Politica' blog<br/></strong> <br/></div></div>
<div className= {Style.sheader}></div>

<div className={Style.wrapp}>
<Container>
<hr/>
<div 
>

</div>

<p><strong><span className={Style.underline}>Political Blog by Alex Hemming.</span></strong></p>
<p>Have you ever wondered why political ideas group togetrher?</p>
<p>This blog should give a basic to advanced knowledge of the reason why opiniuons are different and why some are strange.</p>
<p>Please enjoy your reading. This is based of a large amount of research on empirical studies, brain scans, survaya sna experimentation./</p>
<p>Why Politics?<br />
<p> I have grown up around politics and find that my interests are strongly conected to it.</p>
<p> Since a young age I annoyingly thought the best way to improve the world is to find out why they disagree and show people why they are wrong.</p>
<p>I then went into a degree of Psychology to find out why, leading into a masters of Political psychology, where my thesis investigated and created a way to clearly see why people believe what.</p>
<p>This has lead me to create an intuitive yet thurough analysis and explanation</p>
<br/><br /><strong>Keynotes:</strong></p>


<p><span id="hi">Utilitarianism</span></p>

         <UncontrolledTooltip placement="left" target="#hi">
         Utilitarianism is an ethical theory that determines right from wrong by focusing on outcomes. It is a form of consequentialism. Utilitarianism holds that the most ethical choice is the one that will produce the greatest good for the greatest number.</UncontrolledTooltip>

<UncontrolledTooltip target="#intamb"> The tendency to perceive (i.e. interpret) ambiguous situations as sources of threat </UncontrolledTooltip>
<UncontrolledTooltip target="#entEq"> Human rights philosophies of fairnes and marxism </UncontrolledTooltip>
<UncontrolledTooltip target="#entInd"> Freedom, choice, Kant and property rights</UncontrolledTooltip>
<UncontrolledTooltip target="#CAb"> Biological and Enviromental triggers</UncontrolledTooltip>
<UncontrolledTooltip target="#CogDis">Common misunderstandings and an intuitive understanding of an important theory</UncontrolledTooltip>
<UncontrolledTooltip target="#CogPol">The most important effect on politics</UncontrolledTooltip>


<p><span id="intamb">Intolerance to ambiguity</span></p>


<p><span id="entEq">Entitlment to equality</span></p>
<p><span id="entInd">Entitlment to individual rights</span></p>
<p><span id="CAb">Cause of Absolute philosophies.</span></p>
<p><span id="CogDis">The cognitive dissonance process</span></p>
<p><span id="CogPol">The effect of Cognitive dissonance on politics.</span></p>
<p><span id="Int Study">The most interestring modern studies and experiments.</span></p>



</Container>

</div>

  

   <div className={Style.centre}> 
   <i class="fas fa-road"/>

   <br/><br/><br/><br/><br/><br/><br/>
   <br/><br/><br/><br/><br/><br/>
   <br/><br/><br/><br/><br/><br/>
   <br/><br/><br/><br/><br/><br/>
   mate
   </div>
  </div>  

<i class="fas fa-road"/>
</div>

</div>

</div>



);

};





export default PoliticalTheory;