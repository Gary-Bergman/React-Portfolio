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







{/* <section className="row"> */ }
{/* <!-- Uni-Buy --> */ }
{/* <figure className="col-md-6 p-3 text-center">
    <div className="card">
        <img src="assets/images/UniBuy.png" className="card-img-top" alt="Uni-Buy" />
        <div className="card-body">
            <h5 className="card-title">Uni-Buy</h5>
            <p className="card-text">Buy and sell items at your university.</p>
            <a href="https://github.com/Gary-Bergman/uni-buy" target="_blank"
                className="btn btn-primary">Project Repo</a>
            <a href="https://uni-buy-great.herokuapp.com/" target="_blank"
                className="btn btn-primary">Deployed
                            Site</a>
        </div>
    </div>
</figure> */}
{/* <!-- Book Nook --> */ }
// <figure className="col-md-6 p-3 text-center">
//     <div className="card">
//         <img src="assets/images/BookNook.png" className="card-img-top" alt="Book Nook">
//             <div className="card-body">
//                 <h5 className="card-title">Book Nook</h5>
//                 <p className="card-text">Find a book to read based on a movie you like.</p>
//                 <a href="https://github.com/Gary-Bergman/Book-Nook" target="_blank"
//                     className="btn btn-primary">Project Repo</a>
//                 <a href="https://gary-bergman.github.io/Book-Nook/" target="_blank"
//                     className="btn btn-primary">Deployed
//                     Site</a>
//             </div>
//         </div>
//     </figure>
//     {/* <!-- Eat Da Burger --> */}
//     <figure className="col-md-6 p-3 text-center">
//         <div className="card">
//             <img src="assets/images/EatDaBurger.png" className="card-img-top" alt="Eat Da Burger">
//                 <div className="card-body">
//                     <h5 className="card-title">Eat Da Burger</h5>
//                     <p className="card-text">Eat Bob's tasty burgers.</p>
//                     <a href="https://github.com/Gary-Bergman/Eat-Da-Burger" target="_blank"
//                         className="btn btn-primary">Project
//                     Repo</a>
//                     <a href="https://eat-da-burger-great.herokuapp.com/" target="_blank"
//                         className="btn btn-primary">Deployed
//                     Site</a>
//                 </div>
//         </div>
//     </figure>
//         {/* <!-- Note Taker --> */}
//         <figure className="col-md-6 p-3 text-center">
//             <div className="card">
//                 <img src="assets/images/NoteTaker.png" className="card-img-top" alt="Note Taker">
//                     <div className="card-body">
//                         <h5 className="card-title">Note Taker</h5>
//                         <p className="card-text">Don't forget, take a note.</p>
//                         <a href="https://github.com/Gary-Bergman/Note-Taker" target="_blank"
//                             className="btn btn-primary">Project Repo</a>
//                         <a href="https://note-taker-great.herokuapp.com/" target="_blank"
//                             className="btn btn-primary">Deployed Site</a>
//                     </div>
//         </div>
//     </figure>
//             {/* <!-- Weather Dashboard --> */}
//             <figure className="col-md-6 p-3 text-center">
//                 <div className="card">
//                     <img src="assets/images/WeatherDashboard.png" className="card-img-top" alt="Weather Dashboard">
//                         <div className="card-body">
//                             <h5 className="card-title">Weather Dashboard</h5>
//                             <p className="card-text">Track weather in any city around the world.</p>
//                             <a href="https://github.com/Gary-Bergman/Weather-Dashboard" target="_blank"
//                                 className="btn btn-primary">Project Repo</a>
//                             <a href="https://gary-bergman.github.io/Weather-Dashboard/" target="_blank"
//                                 className="btn btn-primary">Deployed Site</a>
//                         </div>
//         </div>
//     </figure>
//                 {/* <!-- Work Day Scheduler --> */}
//                 <figure className="col-md-6 p-3 text-center">
//                     <div className="card">
//                         <img src="assets/images/WorkDayScheduler.png" className="card-img-top" alt="Work Day Scheduler">
//                             <div className="card-body">
//                                 <h5 className="card-title">Work Day Scheduler</h5>
//                                 <p className="card-text">Easily schedule each hour of your work day.</p>
//                                 <a href="https://github.com/Gary-Bergman/Work-Day-Scheduler" target="_blank"
//                                     className="btn btn-primary">Project Repo</a>
//                                 <a href="https://gary-bergman.github.io/Work-Day-Scheduler/" target="_blank"
//                                     className="btn btn-primary">Deployed Site</a>
//                             </div>
//         </div>
//     </figure>
//                     <div className="col text-center">
//                         <a>
//                         </a>
//                     </div>
{/* </figure>
</section> */}


export default Project;