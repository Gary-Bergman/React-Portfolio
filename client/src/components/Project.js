import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


function Project(props) {

    // Modal
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>

            <figure className="col-md-6 p-3 text-center hvr-grow">
                <Card className="shadow">
                    <img src={props.image} className="card-img-top" alt={props.name + " picture"} />
                    <CardBody>
                        <CardTitle>
                            <h5>{props.name}</h5>
                        </CardTitle>
                        <CardText className="descriptionText">
                            {props.description}
                        </CardText>
                        <CardText className="technologiesText">
                            {props.technologies}
                        </CardText>
                        <div>
                            <Button className="submit" onClick={toggle}>{buttonLabel}Test Account</Button>
                            <Modal isOpen={modal} toggle={toggle} className={className}>
                                <ModalHeader toggle={toggle}>Test Account</ModalHeader>
                                <ModalBody>
                                    {props.modal.option1}
                                    <br />
                                    {props.modal.option2}
                                
                                </ModalBody>
                                {/* <ModalFooter>
                                                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                                            </ModalFooter> */}
                            </Modal>
                        </div>
                        <Button className="prjBtn">
                            <a href={props.repo} target="_blank" rel="noopener noreferrer" className="buttonText">Project Repo</a>
                        </Button >
                        &nbsp;
                        <Button className="prjBtn">
                            <a href={props.deployed} target="_blank" rel="noopener noreferrer" className="buttonText">Deployed Site</a>
                        </Button>
                    </CardBody>
                </Card>
            </figure>
        </>
    )
}


export default Project;