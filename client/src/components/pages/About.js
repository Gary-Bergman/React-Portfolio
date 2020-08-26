import React from "react";
import {
  Card, CardBody, Row, CardText
} from "reactstrap";

function About() {
  return (
    <>
      <main className="container pb-3 ">

        <Card className="m-sm-5 p-3 board aboutMe shadow-lg mainCards">
          <CardBody>
            <legend className="card-title legendText">About Me</legend>
            <hr className="my-4" />

            <Row>
              <CardText>
                <img id="bioImage"
                  className="col-sm-12 col-md-6 col-lg-4 img-fluid float-left mr-5"
                  src="../assets/images/headshot.jpg" alt="Headshot" />
                <div className="aboutText">
                  MERN Stack developer with a background in sales and marketing looking to contribute as a web developer to a JavaScript oriented team. Recent graduate of the intensive, full-time Penn LPS full stack coding bootcamp, with acquired skills including JavaScript, React.js, Node.js, Express.js, MySQL, MongoDB, HTML, CSS, jQuery, Bootstrap, Foundation and Materialize. As a former marketing specialist, I have a knack for framing and design, which translates perfectly to a Jr. Front-End Developer position. I have experiencing designing and building full stack web applications, including working on a four-person team to develop an application, using MVC architecture, to connect parents with teachers in learning pods for small-group tutoring during the Covid-19 pandemic. I was the lead designer for our project, TeachPod, and created the application to be fully mobile-responsive. I’m looking forward to translating my skills to a JavaScript role to build clean, sleek and proficient websites.
                  </div>


              </CardText>
            </Row>
          </CardBody>
        </Card>
        {/* <br /> */}

      </main>
    </>
  );
}

export default About;
