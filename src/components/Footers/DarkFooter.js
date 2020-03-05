/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import Style from "./foot.module.scss"

function DarkFooter() {
  return (
    <footer className={`${Style.back} footer`} >


<container >
  <div class="fb-comments" 
  data-href="https://marcussloss.com/About-me" 
  data-width="90%" data-numposts="5">
    
    </div></container>



      <Container>
        <nav>
          <ul>
            <li>
            
            </li>
            <li>
              <a
                href="https://github.com/HemmingAlex"
                target="_blank"
              >
              </a>
            </li>
            <li>
              <a
                href="Alex.Hemming.me.uk"
                target="_blank"
              >
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © 2020, Designed by Alexander Hemming
          <a
            href="https://github.com/HemmingAlex"
            target="_blank"
          >
             :) 
          </a>
          . Coded by Alexander Hemming
          <a
            href="https://github.com/HemmingAlexr"
            target="_blank"
          >
          </a>
          .
        </div>
      </Container>
   
    </footer>
  );
}

export default DarkFooter;
