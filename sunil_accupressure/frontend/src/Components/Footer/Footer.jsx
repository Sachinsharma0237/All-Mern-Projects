import React, { Component } from "react";
import './Footer.css';

class Footer extends Component {
  state = {};
  render() {
    return (
        <footer className="background">
        <p className="text-footer">
            Copyright &copy; 2020 www.vedaccupressure.com - All Rights Reserved
        </p>
        </footer>
    );
  }
}

export default Footer;