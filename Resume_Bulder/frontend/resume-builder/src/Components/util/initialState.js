export default {
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
      educationDetails: {
        collegeName: "",
        degree: "",
        cgpa: "",
        collegeCity: "",
        collegeState: "",
        graduationMonth: "",
        graduationYear: "",
      },
      experienceDetails: [
        { companyName: "", duration: "", position: "" },
        { companyName: "", duration: "", position: "" },
        { companyName: "", duration: "", position: "" },
      ],
      projects: [
        { projectName: "", techStack: [], summary: "" , projectLink:"" },
        { projectName: "", techStack: [], summary: "" , projectLink:""},
        { projectName: "", techStack: [], summary: ""  , projectLink:""},
        { projectName: "", techStack: [], summary: ""  , projectLink:""}
      ],
      skills : {
          language : [] ,
          frameworks : [] ,
          software : [] ,
          ide : []
      } ,
      profileLinks : {
          linkedIn : "" ,
          github : "" 
      } ,
      achievements : [] ,
      hobbies : [] 
}