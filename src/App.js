import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import FooterNav from "./components/FooterNav/FooterNav";

function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Route exact path={["/", "/about"]} component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <FooterNav/>
      </div>
    </Router>
  );
}

export default App;