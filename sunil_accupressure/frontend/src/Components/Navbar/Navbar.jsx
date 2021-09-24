import React, { Component } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    state = {  }
    render() {
        return (
                <nav class="navbar background h-nav-resp">
                    <div className="contact-details">
                    <i className="fas fa-phone" id="phn">9871429687,8882545242</i>
                    </div>
                    <ul class="nav-list v-class-resp">
                        <li>
                        <Link to="/">
                            <div class="logo"> <span>वैद्य </span><strong> Acupressure</strong> </div>
                        </Link>
                        </li>

                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/treatment">Treatments</Link>
                        </li>
                        <li>
                            <Link to="/query">Any Query?</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                <div class="burger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                </nav>
        );
    }
}

export default Navbar;