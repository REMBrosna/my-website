// About.js
import React from 'react';

function About() {
    return (
        <div className="App about" id="about">
            <header className="App-header">
                <div className="star-small" />
                <div className="star-mid" />
                <div className="star-large" />
                <div className="float-parent-element">
                    <div className="float-child-element">
                        <div className="show-case-bg">
                            <a href="/">
                                <img
                                    src="/assets/images/myPicture.jpg"
                                    alt="About7codes Logo"
                                    className="logo"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </a>
                        </div>
                        <div className="education-details">
                            <h1>Education</h1>
                            <span>2019 - 2023</span>
                            <h5 style={{ fontWeight: 'bold' }}>Build Bright University</h5>
                            <p style={{ fontSize: '14px' }}>Bachelor's degree, Computer Science</p>
                        </div>
                    </div>
                    <div className="float-child-element">
                        <div className="show-case">
                            <h1>Who am I?</h1>
                            <p>
                                I am a software engineer passionate about technologies, containerization technology,
                                and CICD tools. I have a computer science background and a strong interest in the intersection of technology.
                                I am working as a software engineer at one of the biggest companies in Phnom Penh, working with the Singapore team in Cambodia.
                                I was working on a project to help people make their financial transactions more seamless and convenient.
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default About;
