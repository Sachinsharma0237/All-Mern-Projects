import React, { Component } from 'react';
import './Contact.css';
import firebaseApp from '../../firebase/firebaseConfig';
import {contactCodes} from '../util/codes';
import Skin1 from '../Skins/skin1';

class Contact extends Component {
    state = { 
        codes: [
            "fname",
            "lname",
            "summary",
            "email",
            "phone",
            "profession",
            "street",
            "city",
            "state",
            "country",
            "pin"
        ],
        contactDetails: {
            fname: "",
            lname: "",
            summary: "",
            email: "",
            phone: "",
            profession: "",
            street: "",
            city: "",
            state: "",
            country: "",
            pin: "",
          },
          skinId: null,
    }

    nextButtonHandler = async ()=>{
        console.log("next button clicked!!!");
        await firebaseApp.firestore().collection("resumes").doc(this.props.resumeId).update({
            contactDetails: this.state.contactDetails
        });
        this.props.history.push("./education");
    }
    backButtonHandler = ()=>{
        console.log("back button clicked!!!");
        this.props.history.goBack();
    }

    onChangeHandler =(e)=>{
        let id = e.target.id;
        let value = e.target.value;
        let oldContactDetails = this.state.contactDetails;
        this.setState({
            contactDetails:{
                ...oldContactDetails,
                [id]: value
            }
        })  
    }

    componentDidMount=()=>{
        //get contact details of the selected Resume
        firebaseApp.firestore().collection("resumes").doc(this.props.resumeId).get().then( doc=>{
            console.log("Inside Component did Mount of Contact", doc.data());
            let { contactDetails, skinId } = doc.data();
            
            this.setState({
                contactDetails,
                skinId
            })
        })
    }

    render() { 
        return ( <div className="contact-details">
             <div className="contact-form">
                 {this.state.codes.map( code =>{
                     return <div className="contact-form-element" key={code}>
                         <label htmlFor="">{contactCodes[code]}</label>
                         <input 
                         type="text" 
                         id={code} 
                         value={this.state.code}
                         onChange={(e)=>{this.onChangeHandler(e)}}
                         />
                     </div>
                 })}
             <button className="btn" onClick={this.nextButtonHandler}>Next</button>    
             <button className="btn" onClick={this.backButtonHandler}>Back</button>    
             </div>
             <div className="resume-viewer">
                <Skin1 skinId={this.state.skinId} contactDetails = {this.state.contactDetails} ></Skin1>
             </div>
        </div> );
    }
}
 
export default Contact;