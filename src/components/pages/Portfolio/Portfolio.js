import React from "react";
import { Card, CardBody } from "reactstrap"
import Project from "../../Project"

function Portfolio() {
  return (
    <>
      <main className="container p-3">
        <Card className="m-sm-5 p-3 board">
          <CardBody className="card-body">
            <legend className="card-title text-primary">Portfolio</legend>
            <hr className="my-4" />
            <Project />
          </CardBody>
        </Card>
      </main>
    </>
  );
}

export default Portfolio;
