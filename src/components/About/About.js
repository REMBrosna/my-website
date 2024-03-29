import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import TechsStack from "./TechsStack";
import ToolStack from "./ToolStack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <div className="star-small" />
        <div className="star-mid" />
        <div className="star-large" />
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
             Getting to Know me, Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <TechsStack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <ToolStack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
