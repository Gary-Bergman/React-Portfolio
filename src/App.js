import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Project from "./components/Project";
import FooterNav from "./components/FooterNav/FooterNav";
import myProjects from "./myProjects.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    myProjects
  };


  render() {
    return (
      <>
        <Router>
          <div>
            <TopNav />
            <Route exact path={["/", "/about"]} component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
            <FooterNav />
          </div>
        </Router>

        {this.state.myProjects.map(myProjects => (
          <Project
            id={myProjects.id}
            key={myProjects.id}
            name={myProjects.name}
            image={myProjects.image}
            description={myProjects.description}
            repo={myProjects.repo}
            deployed={myProjects.deployed}
          />
        ))}
      </>

    );
  }

}

export default App;