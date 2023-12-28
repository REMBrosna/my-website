import React from 'react';

const iconList = [
    {
        fontAwesomeClass: 'fa-envelope',
        color: 'white',
        bgColor: '#2b2b2b',
        link: 'mailto:your.email@example.com',
    },
    {
        fontAwesomeClass: 'fa-linkedin',
        color: 'white',
        bgColor: '#2b2b2b',
        link: 'https://www.linkedin.com/in/rem-brosna-a18925240',
    },
    {
        fontAwesomeClass: 'fa-twitter',
        color: 'white',
        bgColor: '#0084b4',
        link: 'https://www.twitter.com/yourusername',
    },
    {
        fontAwesomeClass: 'fa-github-alt',
        color: 'white',
        bgColor: 'black',
        link: 'https://www.github.com/yourusername',
    }
];

class Home extends React.Component {
    render() {
        return (
            <div className="App home" id="home">
                <header className="App-header">
                    <div className="star-small" />
                    <div className="star-mid" />
                    <div className="star-large" />
                    <div className="float-parent-element">
                        <div className="float-child-element">
                            <div className="show-case">
                                <h1>Hello, I’m Brosna.</h1>
                                <h2>Software Engineer</h2>
                                <p>
                                    Experienced Software Engineer with Java background of hands-on experience in architecting, supporting, automating, and optimizing mission-critical deployments in AWS, leveraging Infrastructure as code, CI/CD, and Software processes.
                                </p>

                                {/* Integration of social media icons */}
                                <div style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <IconContainer iconList={iconList} />
                                </div>
                            </div>
                        </div>
                        <div className="float-child-element">
                            <div className="show-case-bg">
                                <a href="/">
                                    <img
                                        src="/assets/images/show-case-bg.jpg"
                                        alt="About7codes Logo"
                                        className="logo"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

function IconContainer(props) {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '25%'
    };

    return (
        <div style={containerStyle}>
            {
                props.iconList.map((iconProps, index) =>
                    <Icon key={index} {...iconProps} />
                )
            }
        </div>
    );
}

IconContainer.defaultProps = {
    iconList: []
};

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
            borderRadius: '50%',
            textDecoration: 'none',
            position: 'relative', // Added position relative
        };

        let bgStyle = {
            position: 'absolute',
            height: `${this.props.size}px`,
            width: `${this.props.size}px`,
            borderRadius: '50%',
            backgroundColor: this.props.bgColor,
            transition: 'all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        };

        let bgHoverStyle = {
            height: '0',
            width: '0'
        }

        let iconStyle = {
            fontSize: `${this.props.size / 2}px`,
            color: this.props.color,
            zIndex: '2',
            transition: 'all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        }

        let iconHoverStyle = {
            color: this.props.bgColor,
            transform: 'scale(2) rotate(360deg)',
            //boxShadow: '0 8px 6px -6px black'
        }

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

Icon.defaultProps = {
    size: 35,
    color: 'black',
    bgColor: 'blue',
    fontAwesomeClass: 'fa-circle',
    link: '#'
}

export default Home;
