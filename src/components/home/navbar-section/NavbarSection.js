import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import logo from "../../../assets/images/logo.svg";
import "./NavbarSection.scss";

function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="navbar-container">
      <Navbar expand={"md"} className="navbar-section">
        <NavbarBrand href="/">
          <img src={logo} className="img-fluid" alt="ARTH" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto align-items-start" navbar>
            <NavItem>
              <NavLink className="navbar-title" href="/components/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="navbar-title"
                href="https://github.com/reactstrap/reactstrap"
              >
                Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="navbar-title"
                href="https://github.com/reactstrap/reactstrap"
              >
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarSection;
