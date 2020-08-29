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

                MERN Stack developer with a background in sales and marketing looking to contribute as a web developer to a JavaScript oriented team. Certificate in Full Stack Web Development from the University of Pennsylvania, with acquired skills including JavaScript, React.js, Node.js, Express.js, MySQL, MongoDB, HTML, CSS, jQuery, Bootstrap, Foundation and Materialize. As a former marketing specialist, I have a knack for framing and design, which translates perfectly to a Jr. Front-End Developer position. I have experience designing and building full stack web applications, including working on a four-person team to develop an application, using MVC architecture, to connect parents with teachers in learning pods for small-group tutoring during the Covid-19 pandemic. I was the lead designer for our project, <a className="teachPod" href="https://teach-pod-great.herokuapp.com/" target="_blank">TeachPod</a>, and created the application to be fully mobile-responsive. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
                 
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
