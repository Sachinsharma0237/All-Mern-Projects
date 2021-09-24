import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() {
        return (
            <div className="header">
                <Link className="logo" to="/">
                    <span>वैद्य</span> ACUPRESSURE
                </Link>
                <div className="nav-links">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;