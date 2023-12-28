// Import React
import React from 'react';

// Define the list of social media icons with their properties
const iconList = [
    {
        fontAwesomeClass: 'fa-linkedin',
        color: 'white',
        bgColor: '#2b2b2b',
        link: 'https://www.linkedin.com/in/rem-brosna-a18925240',
        label: 'LinkedIn <-',
    },
    {
        fontAwesomeClass: 'fa-file',
        color: 'white',
        bgColor: '#2b2b2b',
        link: '/assets/BROSNAREM-RESUME.pdf', // Replace this with the actual path to your PDF file
        label: 'Download My Resume <-',
    },
];

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
                            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>GUUD International </p>
                        </div>
                    </div>
                    <div className="float-child-element">
                        <div className="show-case">
                            <p>
                                A Software Engineer with nearly 2 years of experience and a background in Java with Spring Core and Spring Framework. I hold a certification as an AWS Certificate Developer Associate and have more than 2 years’ experience implementing automated continuous integration and continuous deployment. Had hands-on experience both on-premises and cloud in architecting, supporting, AWS deployments using infrastructure as code (IaC) with Terraform.
                            </p>
                            {/* Integration of social media icons */}
                            <div style={containerStyle}>
                                {iconList.map((iconProps, index) => (
                                    <div key={index} style={{ display: 'inline-flex', paddingRight: '50px' }}>
                                        <div className="socialMedia">
                                            <Icon {...iconProps} />
                                            <p>{iconProps.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

// Define the IconContainer component
function IconContainer(props) {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column', // Adjust to column layout
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '50%',
    };

    return (
        <div style={containerStyle}>
            {props.iconList.map((iconProps, index) => (
                <Icon key={index} {...iconProps} />
            ))}
        </div>
    );
}

// Set default props for IconContainer
IconContainer.defaultProps = {
    iconList: [],
};

// Define the Icon component
class Icon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
        };
    }

    mouseOver = () => {
        this.setState({ hover: true });
    }

    mouseLeave = () => {
        this.setState({ hover: false });
    }

    render() {
        const containerStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: `${this.props.size}px`,
            width: `${this.props.size}px`,
            textDecoration: 'none',
            position: 'relative', // Added position relative
        };

        let bgStyle = {
            position: 'absolute',
            height: `${this.props.size}px`,
            width: '100px',
            borderRadius: '10px',
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
            backgroundColor: this.props.bgColor,
            transition: 'all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        };

        let bgHoverStyle = {
            height: '0',
            width: '0',
        };

        let iconStyle = {
            fontSize: `${this.props.size / 2}px`,
            color: this.props.color,
            zIndex: '2',
            transition: 'all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        };

        let iconHoverStyle = {
            color: this.props.bgColor,
            transform: 'scale(2) rotate(360deg)',
            // boxShadow: '0 8px 6px -6px black'
        };

        if (this.state.hover) {
            bgStyle = { ...bgStyle, ...bgHoverStyle };
            iconStyle = { ...iconStyle, ...iconHoverStyle };
        }

        let iconName = `fa ${this.props.fontAwesomeClass}`;

        return (
            <a
                href={this.props.link}
                style={containerStyle}
                onMouseOver={this.mouseOver}
                onMouseLeave={this.mouseLeave}
            >
                <div style={bgStyle} />
                <div className={iconName} style={iconStyle} />
            </a>
        );
    }
}

// Set default props for Icon
Icon.defaultProps = {
    size: 35,
    color: 'black',
    bgColor: 'blue',
    fontAwesomeClass: 'fa-circle',
    link: '#',
};

// Export the Experience component as the default export
export default Experience;
