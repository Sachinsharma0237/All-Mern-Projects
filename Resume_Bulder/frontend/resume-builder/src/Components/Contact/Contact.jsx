import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    state = { 
            fname:null
    }

    onChangeHandler =(e)=>{
        let id = e.target.id;
        let value = e.target.value;
        this.setState({
            [id] : value
        })
        
    }

    render() { 
        let { fname } = this.state;
        return ( <div className="contact-details">
             <div className="contact-form">
                <label htmlFor="">Name</label>
                <input type="text" name="" id="fname" value={this.state.fname} onChange={(e) => {this.onChangeHandler(e)} }/>
             </div>
             <div className="resume-viewer">
                <h1>{fname}</h1>
             </div>
        </div> );
    }
}
 
export default Contact;