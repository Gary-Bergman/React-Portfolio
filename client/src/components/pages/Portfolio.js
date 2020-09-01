import React from "react";
import { Card, CardBody, Row } from "reactstrap"
import Project from "../Project"
import myProjects from "../../myProjects.json";

function Portfolio() {
  return (
    <>
      {/* <main className="container p-3"> */}
        <Card className="m-sm-5 p-3 board shadow-lg portCard mainCards">
          <CardBody className="card-body">
            <legend className="card-title legendText">Projects</legend>
            <hr className="my-4" />
            <Row >
              {myProjects.map(myProjects => (
                <Project
                  id={myProjects.id}
                  key={myProjects.id}
                  name={myProjects.name}
                  image={myProjects.image}
                  description={myProjects.description} 
                  technologies={myProjects.technologies}
                  repo={myProjects.repo}
                  deployed={myProjects.deployed}
                  modal={myProjects.modal}
                />
              ))}
            </Row>
          </CardBody>
        </Card>
      {/* </main> */}
    </>
  );
}

export default Portfolio;
