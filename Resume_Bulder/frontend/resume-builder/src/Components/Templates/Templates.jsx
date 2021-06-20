import React, { Component } from 'react';
import "./Templates.css";
import firebase from "firebase";
import firebaseApp from '../../firebase/firebaseConfig';
import initialState from '../util/initialState';
class Templates extends Component {
    state = { 
        skins: [
        {id:"skin1", path:"./skins/skin1.png"},
        {id:"skin2", path:"./skins/skin2.svg"},
        {id:"skin3", path:"./skins/skin3.svg"},
        {id:"skin4", path:"./skins/skin4.svg"},
        {id:"skin5", path:"./skins/skin5.svg"},
        {id:"skin6", path:"./skins/skin6.svg"},
        {id:"skin7", path:"./skins/skin7.svg"},
        {id:"skin8", path:"./skins/skin8.svg"}
            ]
     }

     handleChooseTemplate = async (skinId)=>{
         if( !this.props.resumeId ){
            let addObj = await firebaseApp.firestore().collection("resumes").add({ skinId: skinId, ...initialState });
            let resumeId = addObj.id; 
            let updateObj = await firebaseApp.firestore().collection("users").doc(this.props.uid).update({
            Resumes: firebase.firestore.FieldValue.arrayUnion(resumeId)
            })
            this.props.history.push("/contact");
            this.props.setResumeId(resumeId);
        }else{
            this.props.history.push("/contact");
        }
     }

    render() { 
        return ( <div className="templates">
            {this.state.skins.map((skin)=>{
                    return <div key={skin.id} className="template">
                        <div className="template-image">
                            <img src={skin.path} alt="" />
                        </div>
                        <div className="choose-template" onClick={( )=> this.handleChooseTemplate(skin.id)}>Choose Template</div>
                    </div>
            })}
        </div> );
    }
}
 
export default Templates;