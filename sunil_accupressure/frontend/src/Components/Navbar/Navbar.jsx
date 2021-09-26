import React, { Component } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() {
        return (
                <nav className="navbar background h-nav-resp">
                    <div className="icons1">
                    <a href="http://www.facebook.com"><i id="fab1" className="fab fa-facebook"></i></a>
                    <a href="http://www.instagram.com"><i id="fab1" className="fab fa-instagram"></i></a>
                    <a href="http://www.youtube.com"><i id="fab1" className="fab fa-youtube"></i></a>
                    <a href="http://www.linkedin.com"><i id="fab1" className="fab fa-linkedin"></i></a>
                    </div>
                    <div className="contact-details">
                    <i className="fas fa-phone" id="phn"><strong><span className="span1">8882545242</span></strong> </i>
                    <i className="fab fa-whatsapp" id="whats"><strong><span className="span1">9871429687</span></strong></i>
                    </div>
                    <ul className="nav-list v-class-resp">
                        <li>
                        <Link to="/">
                            <div className="logo"> <span>वैद्य </span><strong> Acupressure</strong> </div>
                        </Link>
                        </li>

                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/treatment">Services</Link>
                        </li>
                        <li>
                            <Link to="/query">Any Query?</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                <div className="burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                </nav>
        );
    }
}

export default Navbar;