import React, { Component } from 'react';
import './About.css';

class About extends Component {
    
    render() { 
        return ( <div className="about">
            <img className="sunil" src="image.jpg" alt="" />
            <div className="data">
            <p className="name">Hey, I'm Sunil Sharma</p>
            <p className="dest">(MD, Acupressure, Auricular Therapy)</p>
            <p className="para">Acupressure (Chinese -Tui na) is an alternative medicine technique 
                often used in conjunction with acupuncture. It is based on the concept 
                of life energy which flows through "meridians" in the body. In treatment, 
                physical pressure is applied to acupuncture points or ashi trigger points 
                with the aim of clearing blockages in these meridians. Pressure may be applied 
                by hand, by elbow, or with various devices.</p>
            </div>
        </div> );
    }
}
 
export default About;