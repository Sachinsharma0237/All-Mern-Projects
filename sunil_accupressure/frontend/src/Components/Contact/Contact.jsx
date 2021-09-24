import React, { Component } from 'react';

class Contact extends React.Component {
    render() { 
        return <div className="contact">
            <div className="s-12 m-12 l-4 margin-m-bottom-2x">
              <h4 className="text-uppercase text-strong">Our specility</h4>
              <p className="text-size-20"><em>"Acupressure Therapy strengthens resistance to disease and promotes wellness."</em></p><p>
                            
              </p><div className="line">
                <h4 className="text-uppercase text-strong margin-top-30">About Our Clinic</h4>
                <div className="margin">
                  <div className="s-12 m-12 l-4 margin-m-bottom">
                    <a className="image-hover-zoom" href="/"><img src="img/acupressure-clinics-delhi.jpg" alt="Acupressure &amp; Acupuncture Clinics in Delhi"/></a>
                  </div>
                  <div className="s-12 m-12 l-8 margin-m-bottom">
                    <p>Himalaya acu clinic provides the best acupressure treatment of all diseases.</p>
                  </div>
                </div>
              </div>
            </div>
        
            <div className="s-12 m-12 l-4 margin-m-bottom-2x">
              <h4 className="text-uppercase text-strong">Contact Us</h4>
              <div className="line">
                <div className="s-1 m-1 l-1 text-center">
                  <i className="icon-placepin text-primary text-size-12"></i>
                </div>
                <div className="s-11 m-11 l-11 margin-bottom-10">
                  <p><b>Adress:</b> C-602 Saraswati Vihar, Pitampura Delhi-34 (India)</p>
                </div>
              </div>
              <div className="line">
              
                <div className="s-1 m-1 l-1 text-center">
                  <i className="icon-mail text-primary text-size-12"></i>
                </div>
                <div className="s-11 m-11 l-11 margin-bottom-10">
                  <p><a href="/" className="text-primary-hover"><b>E-mail:</b> himalayaacuclinic@gmail.com</a></p>
                </div>
              </div>
              <div className="line">
                <div className="s-1 m-1 l-1 text-center">
                  <i className="icon-smartphone text-primary text-size-12"></i>
                </div>
                <div className="s-11 m-11 l-11 margin-bottom-10">
                  <p><b>Phone:</b> 09718300090, 9990735410</p>
                </div>
              </div>
              <div className="line">
                <div className="s-1 m-1 l-1 text-center">
                  <i className="icon-twitter text-primary text-size-12"></i>
                </div>
                <div className="s-11 m-11 l-11 margin-bottom-10">
                  <p><a href="/" class="text-primary-hover"><b>Twitter</b></a></p>
                </div>
              </div>
              <div className="line">
                <div className="s-1 m-1 l-1 text-center">
                  <i className="icon-facebook text-primary text-size-12"></i>
                </div>
                <div className="s-11 m-11 l-11">
                  <p><a href="https://www.facebook.com/HimalayaAcuClinic" className="text-primary-hover"><b>Facebook</b></a></p>
                </div>
              </div>
            </div>

        </div>;
    }
}
 
export default Contact;