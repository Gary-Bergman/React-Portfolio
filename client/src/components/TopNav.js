import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from "reactstrap"

function TopNav() {

  const location = useLocation();

  // const [collapsed, setCollapsed] = useState(true);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <header>
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light" light expand="md">
          <NavbarBrand href="/" className="ml name">Gary Bergman</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav className="navbar-right">
              <NavItem >
                <NavLink className="topNavItem" href="/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="topNavItem" href="/portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="topNavItem" href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
      
        </Navbar>

      </header>
    </>
  );
}

export default TopNav;
