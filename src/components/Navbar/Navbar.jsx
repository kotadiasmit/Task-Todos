import "./Navbar.css";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavbarComp = () => (
  <Navbar className="bg-body-tertiary" data-bs-theme="dark" sticky="top">
    <Container fluid>
      <Navbar.Brand className="nav-brand">User Tasks</Navbar.Brand>

      <Nav className="my-2 my-lg-0">
        <NavLink to="/" className="nav-link">
          Add Task
        </NavLink>
        <NavLink to="/" className="nav-link">
          Show Tasks
        </NavLink>
      </Nav>
    </Container>
  </Navbar>
);

export default NavbarComp;