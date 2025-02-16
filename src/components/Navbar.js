import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { Button } from "react-bootstrap";
import "../style.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true); // Apply sticky or scroll-based styles
    } else {
      updateNavbar(false); // Reset to default styles
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const getLinkClass = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

  // Check if the current route is "/experience"
  const isExperienceActive = location.pathname === "/experience";

  return (
      <Navbar
          expanded={expand}
          fixed="top"
          expand="md"
          className={`${navColour ? "sticky" : "navbar"} ${isExperienceActive && !navColour ? "experience-active" : ""}`}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            {/*<img src={logo} className="img-fluid logo, alt="brand" />*/}
          </Navbar.Brand>
          <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => {
                updateExpanded(expand ? false : "expanded");
              }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/experience" onClick={() => updateExpanded(false)} className={getLinkClass('/experience')}>
                  Experience
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="fork-btn">
                <Button href="https://github.com/REMBrosna" target="_blank" className="fork-btn-inner">
                  <CgGitFork style={{ fontSize: "1.2em" }} /> <AiFillStar style={{ fontSize: "1.1em" }} />
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;