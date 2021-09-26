import React, { Component } from 'react';
import './Contact.css';
class Contact extends React.Component {
    render() { 
        return <div className="contact">
                <section className="section" id="contactUs">
                <h1 className="head">Contact Us</h1>
                <div className="details">
                    <p>Phone No.: 9871429687, 8882545242</p>
                    <p>Email: sunil1touchsolution@gmail.com</p>
                    <div className="icons">
                    <a href="http://www.facebook.com"><i id="fab" class="fab fa-facebook"></i></a>
                    <a href="http://www.instagram.com"><i id="fab" class="fab fa-instagram"></i></a>
                    <a href="http://www.youtube.com"><i id="fab" class="fab fa-youtube"></i></a>
                    <a href="http://www.linkedin.com"><i id="fab" class="fab fa-linkedin"></i></a>
                    </div>
                    <img className="vistingContact" src="img.jpeg" alt="" />
                </div>
            </section>
        </div>;
    }
}
 
export default Contact;