import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaYoutube } from "react-icons/fa";
import proImage from "../../Assets/proImage.jpg";

const projects = [
    {
        name: "Cambodia National Single Windows",
        image: "https://nsw.gov.kh/img/logo.36df4831.png",
        details: "A streamlined system for managing trade and customs documentation.",
        link: "https://nsw.gov.kh/",
    },
    {
        name: "Singapore Clickargo",
        image: "https://home.clickargo.com/wp-content/uploads/2022/03/Clickargo.png",
        details: "A logistics and freight management solution.",
        link: "https://home.clickargo.com/",
    },
    {
        name: "ACLEDA E-Payment Gateway",
        image: "https://imgs.search.brave.com/V7VOz7ytfYv1OWafumhDlhHR8huGY0WZgs46uFFgbwk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pYmNj/YW1ib2RpYS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDIvQUNMRURBLUxv/Z28tRXhpc3Rpbmct/TmV3LW9uZS0wNy0y/LWUxNjEzOTg4NDIy/MTcxLnBuZw",
        details: "A secure and efficient payment processing platform.",
    },
    {
        name: "GFAS E-Wallet",
        image: "https://www.fin.do/uploads/large_5_benefits_of_using_e_wallets_for_money_transfers1_e2a31191b9.png",
        details: "A digital wallet system for financial transactions.",
    }
];

const fadeInUp = (delay) => ({
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
});
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

function Experience() {
    return (
        <Container fluid className="experience-section py-5 text-light"
                   style={{ background: "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)" }} id="experience">
            <Row className="align-items-center">
                <Col md={6} className="d-flex flex-column align-items-start text-start">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp(0)}
                    >
                        <h2 className="mb-3 fw-bold text-warning">MY EXPERIENCE</h2>
                        <h4 className="mb-4">Software Engineer | 2022 - Present</h4>
                        <motion.p className="lead text-light" variants={fadeInUp(0.2)}>
                            Software Engineer with over 2 years of experience delivering
                            high-quality solutions through effective collaboration, technical
                            expertise, and problem-solving. Skilled in Agile methodologies with
                            a strong history of designing, implementing, and managing web
                            services. Holds a bachelor’s degree in computer science in
                            technical discussions, coding, testing, and integration. Eager to
                            leverage proven skills and achievements to contribute to dynamic,
                            fast-paced projects.
                        </motion.p>
                    </motion.div>
                </Col>
                <Col md={6} className="text-md-end">
                    <motion.img
                        src={proImage}
                        alt="Experience"
                        className="img-fluid rounded shadow-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{ width: '80%', height: 'auto', marginTop : '50px' }}
                    />
                </Col>
            </Row>

            <Row className="mt-5 text-center">
                <h2 className="fw-bold mb-4"><FaProjectDiagram style={{ color: "orange" }} className="me-2" /> PROJECT ACHIEVEMENTS</h2>
            </Row>

            <Row className="mt-4 text-center">
                {projects.map((project, index) => (
                    <Col md={6} className="mb-4" key={index}>
                        <motion.div
                            className="p-3 border rounded shadow-lg bg-light text-dark h-100 d-flex flex-column align-items-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp(index * 0.2)}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img src={project.image} alt={project.name} className="img-fluid" style={{ maxHeight: "150px" }} />
                            <h5 className="fw-bold mt-3">{project.name}</h5>
                            <p className="text-muted">{project.details}</p>
                            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">View Project</a>}
                        </motion.div>
                    </Col>
                ))}
            </Row>

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
                            viewport={{once: false, amount: 0.2}}
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
