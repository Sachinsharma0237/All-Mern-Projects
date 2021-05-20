import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return ( <div className="header">
            <div className="nav-links">
                <ul>
                    <li>
                        <Link to="/">
                        <div className="logo">
                        <img src="logo.png" alt="logo.png"/>
                        </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                         <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                         <Link to="/view">View</Link>
                    </li>
                </ul>
            </div>
        </div> );
    }
}
 
export default Header;