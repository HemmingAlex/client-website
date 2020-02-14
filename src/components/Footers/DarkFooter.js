/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
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
            Invision
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
