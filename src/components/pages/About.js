import React from "react";
import {
  Card, CardBody, Row, CardText
} from "reactstrap";

function About() {
  return (
    <>
      <main className="container pb-3">

        <Card className="m-sm-5 p-3 card board aboutMe ">
          <CardBody>
            <legend className="card-title text-primary">About Me</legend>
            <hr className="my-4" />

            <Row>
              <CardText> <img id="bio-image"
                className="col-sm-12 col-md-6 col-lg-4 img-fluid float-left mr-5"
                src="../assets/images/headshot.jpg" alt="Headshot" />
                I'm a Full Stack Developer in training based in Philadelphia, PA. I run a small event marketing
                company, Local Amp LLC, but decided to take up coding to increase my marketable skill sets.
                Outside of work I love to play Ultimate, video games, board games and guitar! I have only been
                coding for a few months now, but I love it! I'd like to incorporate creative problem solving
                into my next junior developer role after graduating from the Penn BootCamp!
              </CardText>
            </Row>
          </CardBody>
        </Card>

      </main>
    </>
  );
}

export default About;
