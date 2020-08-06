import React from "react";
import { Link, useLocation } from "react-router-dom";

function TopNav() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand ml-5 text-primary myName">Gary Bergman</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <section className="collapse navbar-collapse" id="navbarText">
            <ul className="nav col d-flex justify-content-end">

              {/* About */}
              <li className="nav-item">
                <Link
                  to="/"
                  className={location.pathname === "/" ? "nav-link active" : "nav-link"}
                >
                  About
                </Link>
              </li>

              {/* Portfolio */}
              <li className="nav-item">
                <Link
                  to="/portfolio"
                  className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                >
                  Portfolio
                </Link>
              </li>

              {/* Contact */}
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </section>
        </nav>
      </header>
    </>
  );
}

export default TopNav;
