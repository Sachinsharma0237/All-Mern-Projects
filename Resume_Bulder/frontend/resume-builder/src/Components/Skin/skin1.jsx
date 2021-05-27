import React, { Component } from 'react';
import "./skin1.css";
class Skin extends Component {
    state = { 
        contactDetails: {
            fname: "SACHIN",
            lname: "SHARMA",
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
        return ( <div className="resume-skin">
             <div className="body">
               <ul className="left-body">
                 <div className="summary">{summary}</div>
                  <div className="experience">Experience</div>
                  <div className="company1">
                    <div className="company-name">{this.state.experienceDetails[0].companyName}</div>
                    <div className="company-duration">{this.state.experienceDetails[0].duration}</div>
                    <div className="company-position">{this.state.experienceDetails[0].position}</div>
                  </div>
                  <div className="company2">
                    <div className="company-name">{this.state.experienceDetails[1].companyName}</div>
                    <div className="company-duration">{this.state.experienceDetails[1].duration}</div>
                    <div className="company-position">{this.state.experienceDetails[1].position}</div>
                  </div>

                  <div className="education">Education Details
                    <div className="college-name">{collegeName}</div>
                    <div className="degree">{degree}</div>
                    <div className="cgpa">{cgpa}</div>
                    <div className="college-city">{collegeCity}</div>
                    <div className="college-state">{collegeState}</div>
                    <div className="graduation-month">{graduationMonth}</div>
                    <div className="graduation-year">{graduationYear}</div>
                  </div>

                  <div className="projects">Projects
                  <div className="project-details">

                  <div className="projectName">{projects[0].projectName}</div>
                  <div className="tech-stack">{projects[0].techStack}</div>
                  <div className="my_summary">{projects[0].summary}</div>
                  <div className="project-link">{projects[0].projectLink}</div>

                  </div>

                  {/* <div className="project-details">
                  <div className="projectName">{projects[1].projectName}</div>
                  <div className="tech-stack">{projects[1].techStack}</div>
                  <div className="summary">{projects[1].summary}</div>
                  <div className="project-link">{projects[1].projectLink}</div>
                  </div> */}


                  </div>

               </ul>

               <div className="right-body">
                 <div className="name">
                   <h1>{ fname + "\t" + lname }</h1>
                 </div>


                 <div className="profession">
                   <h2>{ profession }</h2>
                 </div>

                 <h1 className="my-info">Personal Info
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
                 </h1>

                  <h1 className="my-skills">Skills
                    <div className="languages">Languages:
                      <div className="language1">{this.state.skills.language[0] + ", "}</div>
                      <div className="language2">{this.state.skills.language[1] + ", "}</div>
                      <div className="language3">{this.state.skills.language[2]}</div>   
                    </div>
                    <div className="frameworks">Frameworks:
                      <div className="framework1">{this.state.skills.frameworks[0] + ", "}</div>
                      <div className="framework2">{this.state.skills.frameworks[1] + ", "}</div>
                      <div className="framework3">{this.state.skills.frameworks[2]}</div>   
                    </div>
                    <div className="ides">IDEs:
                      <div className="ide1">{this.state.skills.ide[0] + ", "}</div>
                      <div className="ide2">{this.state.skills.ide[1] + ", "}</div>
                      <div className="ide3">{this.state.skills.ide[2]}</div>   
                    </div>

                    </h1>
                    
                    <h1 className="profile-links">Profile Links
                    <div className="linked-in">
                      <img className="my-image" src="linkedin.png" alt=""/>
                      <a href="https://www.linkedin.com/in/sachin-sharma-052875144/">LinkedIn</a>
                    </div>
                    <div className="github">
                      <img className="my-image" src="github.png" alt=""/>
                      <a href="https://github.com/Sachinsharma0237/My_Dev_Course">GitHub</a>
                    </div>
                    </h1>

                    <h1 className="hoobies">Hoobies
                      <div className="hooby1">{this.state.hobbies[0]}</div>
                      <div className="hooby2">{this.state.hobbies[1]}</div>
                      <div className="hooby3">{this.state.hobbies[2]}</div>
                    </h1>
                    


             </div>
             </div>
        </div>);
    }
}
 
export default Skin;