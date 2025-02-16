import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiPostman,
    SiMacos, SiUbuntu, SiIntellijidea,
} from "react-icons/si";
import {DiVisualstudio, DiWindows} from "react-icons/di";

function ToolStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <DiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <SiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
    </Row>
  );
}

export default ToolStack;
