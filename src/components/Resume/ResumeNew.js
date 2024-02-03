import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { pdfjs } from "react-pdf";
import pdf from "../../Assets/../Assets/BROSNAREM-RESUME.pdf";
import {Container, Row} from "react-bootstrap";
import Particle from "../Particle";
import {AiOutlineDownload} from "react-icons/ai";
import Button from "react-bootstrap/Button";

const ResumeNew = () => {
  const downloadResume = () => {
    window.open(pdf, "_blank");
  };
  return (
      <div>
        <Container fluid className="resume-section">
          <Particle />
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
                variant="primary"
                onClick={downloadResume}
                style={{ maxWidth: "250px", marginRight: "10px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>

            <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
            >
              Preview Resume
            </Button>
          </Row>

          <Row className="resume" style={{ justifyContent: "center" }}>
            <div>
              <Worker workerUrl={`//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                <Viewer fileUrl={pdf} />
              </Worker>
            </div>
          </Row>
        </Container>
      </div>
  );
};

export default ResumeNew;
