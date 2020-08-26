import React from "react";
import {
    Card, CardBody, Row, CardText, Container
} from "reactstrap";

function Intro() {
    return (
        <>
       <Container className="pb-3 pt-5">
               
          <Card className="m-sm-5 p-3 shadow-lg introCard mainCards">
                    <CardBody>
                        <CardText>
                            <div className="nameIntro">
                                Gary Bergman
                            </div>
                            <hr className="my-4" />
                            <div className="bodyIntro" id="topLine">
                                Full Stack Developer
                            </div>
                            <br />
                            <div className="bodyIntro" id="botLine">
                                Web Designer
                            </div>
                        </CardText>
                    </CardBody>
                </Card>

                {/* <br />
                <br />
                <br />
                <br /> */}

            </Container>
        </>
    );
}

export default Intro;
