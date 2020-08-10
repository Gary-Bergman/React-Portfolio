import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";


function Project(props) {
    return (
        <>
            {/* <figure className="col-md-6 p-3 text-center">
                <Card>
                    <img src="assets/images/UniBuy.png" className="card-img-top" alt="Uni-Buy" />
                    <CardBody>
                        <CardTitle>
                            <h5>Uni-Buy</h5>
                        </CardTitle>
                        <CardText>
                            <p className="card-text">Buy and sell items at your university.</p>
                        </CardText>
                        <Button>
                            <a href="https://github.com/Gary-Bergman/uni-buy" target="_blank" rel="noopener noreferrer"
                                className="btn-primary">Project Repo</a>
                        </Button >
                        &nbsp;
                        <Button>
                            <a href="https://uni-buy-great.herokuapp.com/" target="_blank" rel="noopener noreferrer"
                                className="btn-primary">Deployed
                            Site</a>
                        </Button>
                    </CardBody>
                </Card>
            </figure> */}

            <figure className="col-md-6 p-3 text-center">
                <Card>
                    <img src={props.img} className="card-img-top" alt={props.name + " picture"} />
                    <CardBody>
                        <CardTitle>
                            <h5>{props.name}</h5>
                        </CardTitle>
                        <CardText>
                            <p className="card-text">{props.description}</p>
                        </CardText>
                        <Button>
                            <a href={props.repo} target="_blank" rel="noopener noreferrer"
                                className="btn-primary">Project Repo</a>
                        </Button >
                        &nbsp;
                        <Button>
                            <a href={props.deployed} target="_blank" rel="noopener noreferrer"
                                className="btn-primary">Deployed
                            Site</a>
                        </Button>
                    </CardBody>
                </Card>
            </figure>
        </>
    )
}


export default Project;