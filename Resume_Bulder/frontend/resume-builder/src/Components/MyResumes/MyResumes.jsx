import React, { Component } from 'react';
import firebaseApp from '../../firebase/firebaseConfig';

class MyResumes extends Component {
    state = { 
        myResumesList : []
     }


    async componentDidMount(){
        let docInfo = await firebaseApp.firestore().collection("users").doc(this.props.uid).get();
        let myResumes = docInfo.data().Resumes;
        let myResumesList = [];
        for(let i = 0; i < myResumes.length; i++){
            let { isSelected, resumeId } = myResumes[i];
            let resumeInfo = await firebaseApp.firestore().collection("resumes").doc(resumeId).get();
            let resumeDetails = resumeInfo.data();
            myResumesList.push({ isSelected, resumeId, resumeDetails });
        }
        this.setState({
            myResumesList : myResumesList
        })
    }

    render() { 
        return ( <div className="templates">
            { this.state.myResumesList.length ? 
            <React.Fragment>
                {this.state.myResumesList.map( myResume =>{
                        return <div key={myResume.resumeId}  id={myResume.resumeId} className="template">
                            <div className="template-image">
                                <img src={`skins/${myResume.resumeDetails.skinId}.png`} alt="img.png" />
                            </div>
                        </div>
                        { myResume.isSelected ?
                            <React.Fragment>
                                <div className="select">Selected</div> 
                                <div className="template-actions">
                                    <div className="edit">Edit</div>
                                    <div className="view">View</div>
                                </div>
                            </React.Fragment>
                            :
                            <React.Fragment>
                                <div className="template-actions">
                                    <div className="select">Select</div>
                                </div>
                            </React.Fragment>
                        }   
                })}
            </React.Fragment>
            :
            <h1>Sit tight, Loading Template......</h1>
        }

        </div> );
    }
}
 
export default MyResumes;