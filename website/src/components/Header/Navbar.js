import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import HeaderModal from "./HeaderModal";
import './Navbar.css';
import Logo from "../../assets/images/logo.png";

const NavbarHeader = () => {
  return (
    <>
      <Navbar sticky="top" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/"><img
          src={Logo}
          alt="First slide"
        /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="main-navbar">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <NavDropdown title="Services" id="navbarScrollingDropdown">
                  <NavDropdown.Item className="Navbar-link" href="#">Mobile Apps</NavDropdown.Item>
                  <NavDropdown.Item className="Navbar-link" href="#">Web Development</NavDropdown.Item>
                  <NavDropdown.Item className="Navbar-link" href="#">Branding</NavDropdown.Item>
                  <NavDropdown.Item className="Navbar-link" href="#">Digital Marketing</NavDropdown.Item>
                  <NavDropdown.Item className="Navbar-link" href="#">Software Solutions</NavDropdown.Item>
                  <NavDropdown.Item className="Navbar-link" href="#">Digital Marketing</NavDropdown.Item>
                  <NavDropdown.Item className="Navbar-link" href="#">Animated Logo</NavDropdown.Item>
                </NavDropdown>
              <Nav.Link href="#">Portfolio</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>
            <HeaderModal/>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHeader;
