import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import FooterNav from "./components/FooterNav";



function App() {
  // Setting this.state.friends to the friends json array

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

        

        
      </>
    );
  }


export default App;