import React, { Component } from 'react';
import './Settings.css';
import uid from '../../uid';
import axios from 'axios';

class Settings extends Component {
    state = {  
        name:"",
        username:"",
        bio:"",
        email:"",
        password:"",
        profilePic:"",
        disabled:true
    };
    fileInput = React.createRef();

    onChangeHandler = (e) =>{
        let type = e.target.id;    //name, username, password, email, bio
        let value = e.target.value;
        this.setState({
            [type]:value
        })
    }
    onEditHandler = () =>{
        this.setState({
            disabled:false
        })
    }
    onCancelHandler = () =>{
        let { name, username, bio, email, password, profilePic } = this.props.user;
        this.setState({
            name, 
            username,
            bio,
            email,
            password,
            profilePic,
            disabled:true    
        })
    }
    onSaveHandler = () =>{
        let formData = new FormData();
        let { name, username, bio, email, password, profilePic } = this.state
        formData.append("name" ,name);
        formData.append("username" ,username);
        formData.append("bio" ,bio);
        formData.append("email" ,email);
        formData.append("password" ,password);
        axios.patch(`/api/user/${this.props.user["_id"]}`, formData).then(obj =>{
            if(obj.data.updatedUser){
                this.props.updatedUser(obj.data.updatedUser);
                this.setState({
                    disabled:true
                })
            }
        })
    }

    componentDidMount(){
        let { name, username, bio, email, password, profilePic } = this.props.user;
        this.setState({
            name, 
            username,
            bio,
            email,
            password,
            profilePic    
        })

    }
    
    onUpdatePicHandler = () =>{
        let fileObject = this.fileInput.current.files[0];
        let formData = new FormData();
        formData.append('user', fileObject);
        axios.patch(`/api/user/${this.props.user["_id"]}`, formData).then(obj =>{
            let profilePic = obj.data.updatedUser.profilePic;
            this.setState({
                profilePic
            })
        })
        
    }

    render() { 
        return ( 
            <div className="settings">

            <div className="profile-photo">
                <img src={this.state.profilePic} alt=""/>
                <input type="file" ref={this.fileInput} name="" id=""/>
                <button onClick={this.onUpdatePicHandler}>Update Photo</button>
            </div>
            <div className="profile-details">

                <div className="profile-details-form">

                <div className="detail">
                    <h2>Name</h2>
                    <input type="text" id="name" value={this.state.name} onChange={ (e) => {this.onChangeHandler(e)} } disabled={this.state.disabled}  />
                </div>
                <div className="detail">
                    <h2>Username</h2>
                    <input type="text" id="username" value={this.state.username} onChange={ (e) => this.onChangeHandler(e) } disabled={this.state.disabled}/>
                </div>
                <div className="detail">
                    <h2>Bio</h2>
                    <input type="text" id="bio" value={this.state.bio} onChange={ (e) => this.onChangeHandler(e) } disabled={this.state.disabled}/>
                </div>
                <div className="detail">
                    <h2>Email</h2>
                    <input type="text" id="email" value={this.state.email} onChange={ (e) => this.onChangeHandler(e) } disabled={this.state.disabled}/>
                </div>
                <div className="detail">
                    <h2>Password</h2>
                    <input type="password" id="password" value={this.state.password} onChange={ (e) => this.onChangeHandler(e) } disabled={this.state.disabled}/>
                </div>
                </div>

                { this.state.disabled ? (
                    <div className="profile-actions">
                    <button className="edit" onClick={ this.onEditHandler }>Edit</button>
                    </div>
                ) : (
                <div className="profile-actions">
                <button className="cancel" onClick={ this.onCancelHandler }>Cancel</button>
                <button className="save" onClick={this.onSaveHandler} >Save</button>
                </div>
                ) }
                
            </div>
        </div>
        );
    }
}
 
export default Settings;