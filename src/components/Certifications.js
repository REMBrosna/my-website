import React from 'react';

function Certifications() {
    return (
        <div className="App contact" id="certifications">
            <header className="App-header">
                <div className="star-small" />
                <div className="star-mid" />
                <div className="star-large" />
                <div className="float-parent-element">
                    <div className="float-child-element">
                        <div className="education-details">
                            <h1 style={{fontWeight: 'bold'}}>Certificates</h1>
                        </div>
                        <div className="show-case-bg">
                            <a href="/">
                                <img
                                    src="/assets/images/img.png"
                                    alt="About7codes Logo"
                                    className="logo"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="float-child-element" style={{marginTop: '130px'}}>
                        <div className="show-case">
                            <p>
                                AWS Certificate Developer Associate
                                I am proud to hold the AWS Certificate Developer Associate  certification,
                                which demonstrates my expertise in AWS services and technologies. With this certification,
                                I have proven my ability to design secure and robust solutions that align with customer requirements.
                                I specialize in creating scalable, resilient, efficient, and fault-tolerant distributed systems.
                                My AWS certification reflects my commitment to delivering high-quality cloud solutions and
                                my dedication to staying at the forefront of developer technology.
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Certifications;
