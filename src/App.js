import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sticky: false,
        };
    }

    componentDidMount() {
        this.scrollHandler = () => {
            if (window.scrollY > 4) {
                this.setState({ sticky: true });
            } else {
                this.setState({ sticky: false });
            }
        };

        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    render() {
        let stickit = this.state.sticky;

        return (
            <div className="App">
                <div className="App-inner">
                    <div className={stickit ? 'routernav-container stickit' : 'routernav-container'}>
                        <div className="routernav-inner">
                            <div className="container-logo">
                                <a href="/">
                                    <img src="/assets/images/logos/favicon.png" alt="About7codes Logo" className="logo" />
                                </a>
                                <h1 className="logo-text">
                                    <a href="/">
                                        <span>Brosna</span><br/>
                                        <span>REM</span>
                                    </a>
                                </h1>
                            </div>
                            <ul className="routernav">
                                <li className="routernav-item">
                                    <a href="#home">Home</a>
                                </li>
                                <li className="routernav-item">
                                    <a href="#about">About</a>
                                </li>
                                <li className="routernav-item">
                                    <a href="#experience">Experience</a>
                                </li>
                                <li className="routernav-item">
                                    <a href="#certifications">Certifications</a>
                                </li>
                                <li className="routernav-item">
                                    <a href="#footer"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Home />
                    <About />
                    <Experience />
                    <Certifications />
                    <Footer />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
