// Import React
import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {AiFillGithub, AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

// Define the Experience component
function Experience() {
    // Define containerStyle for styling purposes
    const containerStyle = {
        // Add your styles here if needed
    };

    // Return the JSX structure for the Experience component
    return (
        <Container fluid className="App experience" id="experience">
            <Row>
                <Col md="4" className="App-header">
                    <div className="star-small" />
                    <div className="star-mid" />
                    <div className="star-large" />

                    <p style={{ fontSize: '14px' }}>2021 - 2022</p>
                    <h5 style={{ fontWeight: 'bold' }}>Freelancer Software Developer</h5>
                    <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Mungkul Serey Company</p>

                    <p style={{ fontSize: '14px' }}>2022 - 2023</p>
                    <h5 style={{ fontWeight: 'bold' }}>Software Engineer</h5>
                    <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Branch of GUUD (International) Pte Ltd</p>
                </Col>
                <Col md="8" className="App-header-seconds">
                    <p>
                        A Software Engineer with nearly 2 years of experience and a background in Java with Spring Core and Spring Framework. I hold a certification as an AWS Certificate Developer Associate and have more than 2 years’ experience implementing automated continuous integration and continuous deployment. Had hands-on experience both on-premises and cloud in architecting, supporting, AWS deployments using infrastructure as code (IaC) with Terraform.
                    </p>
                </Col>

            </Row>
        </Container>

    );
}


// Export the Experience component as the default export
export default Experience;
