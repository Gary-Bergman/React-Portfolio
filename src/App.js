import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import FooterNav from "./components/FooterNav";

function App() {
  return (
    <>
      <Router>
        <TopNav />
        <main className="container p-3">
          <Route exact path={["/", "/about"]} component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          {/* <Route path="*" component={About} /> */}
          <FooterNav />
        </main>
      </Router>
    </>
  );
}

export default App;