import React, { Component } from 'react';
import "./skin2.css";

class Skin2 extends Component {
    state = { 
        contactDetails: {
            fname: "Sachin",
            lname: "Sharma",
            summary: "Personable IT consultant with 4+ years of experience in a global technology firm. CompTIA A+ Certification. Scored region-leading QST rating based on internal review (98.76%). Seeking to leverage solid technical skills and abilities to advance my career as the next IT consultant for Linsang Group.",
            email: "sachinsharma0237@gmail.com",
            phone: "+919540360365",
            profession: "MERN Developer",
            street: "Street no 9",
            city: "New Delhi",
            state: "Delhi",
            country: "India",
            pin: "110084",
          },
          educationDetails: {
            collegeName: "Delhi Institute of Tool Engineering",
            degree: "B.Tech",
            cgpa: "8.0",
            collegeCity: "Delhi",
            collegeState: "Delhi",
            graduationMonth: "Aug",
            graduationYear: "2018",
          },
          experienceDetails: [
            { companyName: "Embedded Design Services India Pvt. Ltd.", duration: "1+ Year", position: "Software Developer" },
            { companyName: "Untroden Labs Pvt. Ltd.", duration: "0.6 Year", position: "Software Developer" },
            { companyName: "", duration: "", position: "" },
          ],
          projects: [
            { projectName: "WhiteBoard", techStack: ["Node.js, ", "Express.js, ", "HTML/CSS "], summary: " Line-width" , projectLink:"https://sachinsharma-whiteboard.herokuapp.com/" },
            { projectName: "Chat App", techStack: ["Node.js", "Express.js", "Socket.io", "html/css"], summary: "" , projectLink:""},
            { projectName: "", techStack: ["", "", ""], summary: ""  , projectLink:""},
            { projectName: "", techStack: ["", "", ""], summary: ""  , projectLink:""}
          ],
          skills : {
              language : ["Java" , "JavaScript" , "C"] ,
              frameworks : ["Node.js" , "React.js" , "Express.js"] ,
              software : ["" , "" , ""] ,
              ide : ["VS-Code" , "Atom" , "Android-Studio"]
          } ,
          profileLinks : {
              linkedIn : "" ,
              github : "" 
          } ,
          achievements : ["" ,"" ,"" , "" ,""] ,
          hobbies : ["Driving" , "Reading" , "Cricket"] 
     }
    render() { 
        let {
            fname,
            lname,
            summary,
            email,
            phone,
            profession,
            street,
            city,
            state,
            country,
            pin,
          } = this.state.contactDetails;
          let {
            collegeName,
            degree,
            cgpa,
            collegeCity,
            collegeState,
            graduationMonth,
            graduationYear,
          } = this.state.educationDetails;
          let {
            language,
            frameworks, 
            software,
            ide
          } = this.state.skills;
          let {
              linkedIn,
              github
          } = this.state.profileLinks;
          let projects = this.state.projects;
        return ( 
            <React.Fragment>
                <div className="skin">
                <ul className="left-side">
                <div className="name">
                    <h1>{ fname}</h1>
                </div>   
                <div className="surname">
                    <h1>{lname}</h1>
                </div> 
                <div className="contact-heading">CONTACT</div>
                <div className="contact-details">
                    <div className="address">
                    <img className="my-image" src="address.png" alt=""/>
                    <div className="my-address">{street + ", " + city + ", " + state + ", " + country + ", " + pin}</div> 
                    </div>

                    <div className="phone">
                    <img className="my-image" src="phone.png" alt=""/>
                    <div className="my-phone">{phone}</div>
                    </div>
                    <div className="email">
                    <img className="my-image" src="email.png" alt=""/>
                    <div className="my-email">
                    <a className="email-link" href={email}>{email}</a>
                  </div>
                  </div>

                </div>
                </ul>




                <ul className="right-side">
                </ul>
                </div>

            </React.Fragment>
        );
    }
}
 
export default Skin2;