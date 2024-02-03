// Import React
import React from 'react';

// Define the Experience component
function Experience() {
    // Define containerStyle for styling purposes
    const containerStyle = {
        // Add your styles here if needed
    };

    // Return the JSX structure for the Experience component
    return (
        <div className="App experience" id="experience">
            <header className="App-header">
                <div className="star-small" />
                <div className="star-mid" />
                <div className="star-large" />
                <div className="float-parent-element">
                    <hr />
                    <div className="float-child-element">
                        <div className="education-details">
                            <h1>Experience</h1>
                            <p style={{ fontSize: '14px' }}>2021 - 2022</p>
                            <h5 style={{ fontWeight: 'bold' }}>Freelancer Software Developer</h5>
                            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Mungkul Serey Company</p>
                        </div>
                        <div className="education-details" style={{ marginTop: '50px' }}>
                            <p style={{ fontSize: '14px' }}>2022 - 2023</p>
                            <h5 style={{ fontWeight: 'bold' }}>Software Engineer</h5>
                            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Branch of GUUD (International) Pte Ltd</p>
                        </div>
                    </div>
                    <div className="float-child-element">
                        <div className="show-case">
                            <p>
                                A Software Engineer with nearly 2 years of experience and a background in Java with Spring Core and Spring Framework. I hold a certification as an AWS Certificate Developer Associate and have more than 2 years’ experience implementing automated continuous integration and continuous deployment. Had hands-on experience both on-premises and cloud in architecting, supporting, AWS deployments using infrastructure as code (IaC) with Terraform.
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}


// Export the Experience component as the default export
export default Experience;
