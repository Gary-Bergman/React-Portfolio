import React from "react";
import { Card, CardBody, Row, CardText, Container } from "reactstrap";
import style from "./style.css"

// import { Link, Route } from "react-router-dom";
// import Learn from "./Learn";

function Contact(props) {
  return (
    <>
      <Card className="m-sm-5 p-3">
        <CardBody>
          <legend className="card-title text-primary">Contact</legend>
          <hr className="my-4" />

          <Row className="center"> 
            <CardText>
              <Container>

                {/* <!-- Github --> */}
                <Row>
                  <a href="https://github.com/Gary-Bergman" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"
                    aria-hidden="true"></i> Github</a>
                  {/* <!-- Email --> */}
                </Row>
                <Row>
                  <a href="mailto:garybergman00@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"
                    aria-hidden="true"></i> Email</a>
                </Row>
                {/* <!-- LinkedIn --> */}
                <Row>
                  <a href="https://www.linkedin.com/in/gary-bergman/" target="_blank" rel="noopener noreferrer"><i
                    className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
                </Row>
                {/* <!-- Phone --> */}
                <Row>
                  <a href="mailto:479-715-1009" target="_blank" rel="noopener noreferrer"><i className="fa fa-phone"
                    aria-hidden="true"></i> Phone</a>
                </Row>
                {/* <!-- Resume --> */}
                <Row>
                  <a
                    href="https://drive.google.com/file/d/1HZU6OWLzWQNUQhQZbd7WZihXW6MoJPkH/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer"><i className="fa fa-file-text-o" aria-hidden="true"></i> Resume</a>
                </Row>

              </Container>
            </CardText>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}

export default Contact;
