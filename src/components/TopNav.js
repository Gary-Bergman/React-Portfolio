import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, Button, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from "reactstrap"

function TopNav() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  // const [collapsed, setCollapsed] = useState(true);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <header>
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light" light expand="md">
          <NavbarBrand href="/" className="ml-auto">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="float" href="/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <a className="navbar-brand ml-5 text-primary myName">Gary Bergman</a>
          <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
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
        </Navbar>
        {/* <Navbar color="faded" light expand="md">
          <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> */}

      </header>
    </>
  );
}

export default TopNav;
