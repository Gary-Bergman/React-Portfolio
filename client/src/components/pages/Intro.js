import React from "react";
import {
    Card, CardBody, Row, CardText, Container
} from "reactstrap";

function Intro() {
    return (
        <>
            <Container >
                <Card className="cardIntro shadow-lg">
                    <CardBody>
                        <CardText>
                            <div className="nameIntro">
                                Gary Bergman
                        </div>
                            <hr className="my-4" />
                            <div className="bodyIntro">
                                Full Stack Developer
                        <br />
                        Web Designer
                        </div>
                        </CardText>



                    </CardBody>
                </Card>

            </Container>
        </>
    );
}

export default Intro;
