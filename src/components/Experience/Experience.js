import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { FaProjectDiagram, FaYoutube } from "react-icons/fa";

// Import your image
import proImage from "../../Assets/proImage.jpg";

const projects = [
    {
        name: "Cambodia National Single Windows",
        image: "https://nsw.gov.kh/img/logo.36df4831.png",
        details: "A streamlined system for managing trade and customs documentation.",
        link: "https://nsw.gov.kh/",
        customStyle: { height: "200px" } // Adjusted height for logos
    },
    {
        name: "Singapore Clickargo",
        image: "https://home.clickargo.com/wp-content/uploads/2022/03/Clickargo.png",
        details: "A logistics and freight management solution.",
        link: "https://home.clickargo.com/",
        customStyle: { height: "200px" } // Adjusted height for logos
    },
    {
        name: "ACLEDA E-Payment Gateway",
        image: "https://imgs.search.brave.com/V7VOz7ytfYv1OWafumhDlhHR8huGY0WZgs46uFFgbwk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pYmNj/YW1ib2RpYS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDIvQUNMRURBLUxv/Z28tRXhpc3Rpbmct/TmV3LW9uZS0wNy0y/LWUxNjEzOTg4NDIy/MTcxLnBuZw",
        details: "A secure and efficient payment processing platform.",
        customStyle: { height: "200px" } // Adjusted height for logos
    },
    {
        name: "GFAS E-Wallet",
        image: "https://www.fin.do/uploads/large_5_benefits_of_using_e_wallets_for_money_transfers1_e2a31191b9.png",
        details: "A digital wallet system for financial transactions.",
        customStyle: { height: "200px" } // Adjusted height for logos
    }
];

const youtubeVideos = [
    {
        title: "Project Demo: Cambodia National Single Windows",
        embedUrl: "https://www.youtube.com/embed/example1"
    },
    {
        title: "Clickargo Logistics Solution Overview",
        embedUrl: "https://www.youtube.com/embed/example2"
    },
    {
        title: "ACLEDA E-Payment Gateway Walkthrough",
        embedUrl: "https://www.youtube.com/embed/example3"
    },
    {
        title: "GFAS E-Wallet Features",
        embedUrl: "https://www.youtube.com/embed/example4"
    }
];

const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.17, 0.55, 0.55, 1] } }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.17, 0.55, 0.55, 1] } }
};

const fadeInUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay, ease: [0.17, 0.55, 0.55, 1] } }
});

function Experience() {
    const controls = useAnimation();

    return (
        <Container fluid className="experience-section py-5" id="experience">
            {/* Experience Section */}
            <Row className="align-items-center">
                <Col md={6} className="d-flex flex-column align-items-start text-start">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInLeft}
                    >
                        <h2 className="mb-4 fw-bold">MY EXPERIENCE</h2>
                        <motion.p className="lead" variants={fadeInUp(0.2)}>
                            <span className="fw-semibold"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Software Engineer</span>
                            with over 2 years of experience delivering
                            high-quality solutions through effective collaboration, technical expertise, and problem-solving.
                            Skilled in Agile methodologies with a strong history of designing, implementing, and managing web services.
                            Holds a bachelor’s degree in computer science and excels in technical discussions, coding,
                            testing, and integration. Eager to leverage proven skills and achievements to contribute to dynamic,
                            fast-paced projects.
                        </motion.p>
                    </motion.div>
                </Col>
                <Col md={6} className="text-md-end">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInRight}
                    >
                        <img src={proImage} alt="Experience" className="img-fluid rounded shadow-lg"
                             style={{ width: '80%', height: 'auto', marginTop : '50px' }} />
                    </motion.div>
                </Col>
            </Row>

            {/* Project Achievements Section */}
            <Row className="mt-5 text-center">
                <h2 className="fw-bold mb-4"><FaProjectDiagram style={{ color: "orange" }}  className="me-2" /> PROJECT ACHIEVEMENTS</h2>
            </Row>

            <Row className="mt-4 text-center">
                {projects.map((project, index) => (
                    <Col md={6} className="mb-4" key={index}>
                        <motion.div
                            className="p-3 border rounded shadow-sm h-100 d-flex flex-column"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            variants={fadeInUp(index * 0.2)}
                        >
                            <div className="d-flex justify-content-center align-items-center"
                                 style={{height: project.customStyle.height}}>
                                <motion.img
                                    src={project.image}
                                    alt={project.name}
                                    className="img-fluid"
                                    style={{maxWidth: "100%", maxHeight: "100%", objectFit: "contain"}}
                                    whileHover={{scale: 1.05}}
                                    transition={{duration: 0.3}}
                                />
                            </div>
                            <h5 className="fw-bold mt-3">{project.name}</h5>
                            <p className="text-muted">{project.details}</p>
                            <div style={{textAlign: 'center'}}>
                                {project.link &&
                                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                                       className="btn btn-primary mt-auto" style={{width: '200px'}}>View Project</a>
                                }
                            </div>
                        </motion.div>
                    </Col>
                ))}
            </Row>

            {/* Project Videos Section */}
            <Row className="mt-5 text-center">
                <h2 className="fw-bold mb-4">
                <FaYoutube className="me-2" style={{ color: "red" }} /> YOUTUBE VIDEOS
                </h2>
            </Row>

            <Row className="mt-4 text-center">
                {youtubeVideos.map((video, index) => (
                    <Col md={6} className="mb-4" key={index}>
                        <motion.div
                            className="p-3 border rounded shadow-sm"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp(index * 0.2)}
                        >
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src={video.embedUrl}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h5 className="fw-bold mt-3">{video.title}</h5>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Experience;