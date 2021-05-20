import React, { Component } from 'react';
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="header">
            <Link to="/">
            <div className="logo">
            <img className="logo" src="logo.png" alt=""/>
            </div>
            </Link>
            <div className="nav-links">
                <ul>
                    <li className="home" >
                        <Link to="/home" >Home</Link>
                    </li>
                    <li className="profile" >
                        <Link to="/profile" >Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
        )}}
        
export default Header;