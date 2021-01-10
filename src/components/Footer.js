/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

const Footer = ({history}) => {
  return (
    <>
      <footer className="footer" data-background-color="black">
        <Container>
          <nav>
            <ul>
              <li>
                <a style={{ cursor: 'pointer' }}  onClick={() => history.push('/')}>
                  WE INSPIRE
                </a>
              </li>
              <li>
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={() => history.push('/contact-us')}
                >
                  About Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
