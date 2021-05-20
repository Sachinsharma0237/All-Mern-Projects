import React, { Component } from 'react';
import "./Profile.css";

class Profile extends Component {
    state = {  
        name:"", 
        email:"", 
        age:"", 
        cheeks:"", 
        tZone:"", 
        skinConcerns:"", 
        allergic:"", 
        randomIssues:""
    }  

    onChangeHandler = (e) =>{
        let type = e.target.id;    
        let value = e.target.value;
        this.setState({
            [type]:value
        })
    }
    render() { 
        let{ name, email, age, cheeks, tZone, skinConcerns, allergic, randomIssues} = this.props.myData.data;
        console.log(this.props.myData.data);
        return ( 
            <div className="settings">
            <div className="profile-details">
                <div className="profile-details-form">
                <div className="detail">
                    <h2>Name</h2>
                    <input type="text" id="name" value={name} onChange={ (e) => {this.onChangeHandler(e)} }   />
                </div>
                <div className="detail">
                    <h2>Email</h2>
                    <input type="text" id="email" value={email} onChange={ (e) => this.onChangeHandler(e) } />
                </div>
                <div className="detail">
                    <h2>Age</h2>
                    <input type="text" id="age" value={age} onChange={ (e) => this.onChangeHandler(e) }/>
                </div>
               
                <div className="detail">
                    <h2>Cheeks</h2>
                    <input type="password" id="cheeks" value={cheeks} onChange={ (e) => this.onChangeHandler(e) } />
                </div>
                <div className="detail">
                    <h2>T-Zone</h2>
                    <input type="text" id="tZone" value={tZone} onChange={ (e) => this.onChangeHandler(e) } />
                </div>
                <div className="detail">
                    <h2>Skin Concerns</h2>
                    <input type="text" id="skinConcerns" value={skinConcerns} onChange={ (e) => this.onChangeHandler(e) } />
                </div>
                <div className="detail">
                    <h2>Allergic</h2>
                    <input type="text" id="allergic" value={allergic} onChange={ (e) => this.onChangeHandler(e) } />
                </div>
                <div className="detail">
                    <h2>Random Issues</h2>
                    <input type="text" id="randomIssues" value={randomIssues} onChange={ (e) => this.onChangeHandler(e) }/>
                </div>
                </div>
                
            </div>
        </div>
        );
    }
    
}
 
export default Profile;