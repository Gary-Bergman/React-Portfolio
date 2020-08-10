import React from "react";
import { Card, CardBody, Row, CardText, Container, Col } from "reactstrap";


function Contact() {
  return (
    <>
      <Card className="m-sm-5 p-3 align-middle">
        <CardBody>
          <legend className="card-title text-primary">Contact</legend>
          <hr className="my-4" />

          <Row>
            <Col className="col-sm-6 col-md-6 center">

              <CardText>
                <Container>

                  {/* <!-- Github --> */}
                  <br></br>
                  <Row>

                    <a href="https://github.com/Gary-Bergman" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"
                      aria-hidden="true"></i> Github</a>

                  </Row>
                  <br></br>

                  {/* <!-- Email --> */}
                  <Row>
                    <a href="mailto:garybergman00@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"
                      aria-hidden="true"></i> Email</a>
                  </Row>
                  <br></br>
                  {/* <!-- LinkedIn --> */}
                  <Row>
                    <a href="https://www.linkedin.com/in/gary-bergman/" target="_blank" rel="noopener noreferrer"><i
                      className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
                  </Row>
                  <br></br>
                  {/* <!-- Phone --> */}
                  <Row>
                    <a href="tel:4797151009" target="_blank"><i className="fa fa-phone"
                      aria-hidden="true"></i> Phone</a>
                  </Row>
                  <br></br>
                  {/* <!-- Resume --> */}
                  <Row>
                    <a
                      href="https://drive.google.com/file/d/1HZU6OWLzWQNUQhQZbd7WZihXW6MoJPkH/view?usp=sharing"
                      target="_blank" rel="noopener noreferrer"><i className="fa fa-file-text-o" aria-hidden="true"></i> Resume</a>
                  </Row>
                  <br></br>

                </Container>
              </CardText>
            </Col>
            <img id="contact-image"
              className="col-sm-12-center col-md-6 col-lg-10"
              // img-fluid 
              src="../assets/images/contact-us.jpg" alt="Contact Me!" />
            <Col>

            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}

export default Contact;
