import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../../../assets/images/logo.svg";
import "./NavbarSection.scss";

function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="navbar-container">
      <Navbar expand={"md"} className="navbar-section" color="faded" dark>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: -100, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <NavbarBrand href="/">
              <img src={logo} className="img-fluid" alt="ARTH" />
            </NavbarBrand>
          </motion.div>
        </AnimatePresence>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: 0, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="ms-auto"
            >
              <Nav className="ms-auto align-items-start" navbar>
                <NavItem>
                  <NavLink
                    className="navbar-title"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="navbar-title"
                    onClick={() => navigate("/products")}
                  >
                    Products
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navbar-title" href="#contact-section">
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </motion.div>
          </AnimatePresence>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarSection;
