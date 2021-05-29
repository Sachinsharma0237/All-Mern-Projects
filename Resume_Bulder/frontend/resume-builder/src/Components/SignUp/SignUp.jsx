import React, { Component } from 'react';
import firebaseApp from '../../firebase/firebaseConfig';
import './SignUp';

class SignUp extends Component {
    state = {
        fname:"",
        lname:"",
        id:"",
        pw:"",
        error:""
     }

    onChangeHandler =(e)=>{
        let id = e.target.id;
        let value = e.target.value;
        this.setState({
            [id]:value
        })
    }

    signUpHandler =()=>{
        let {id, pw} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(id, pw)
        .then( (userInfo)=>{
            console.log("Inside then");
            console.log(userInfo);
            let fname = this.state.fname;
            let lname = this.state.lname;
            let uid = userInfo.user.uid;
            let userCreatedPromise = firebaseApp.firestore().collection("users").doc(uid).set({
                "First Name": fname,
                "Last Name": lname,
                "Email": id,
                "Password": pw,
                "uid": uid
            })
            return userCreatedPromise;
        })
        .then((obj)=>{
            console.log("User Created!");
            console.log(obj);
        })
        .catch( (error)=>{
            console.log("Inside Catch");
            this.setState({
                error: error.message
            })
        })
    }
     
    render() { 
        return ( 
            <div className="sign-up">
                <div className="fname">
                    <h4>First Name</h4>
                <input type="text" placeholder="Enter First Name" id="fname" value={this.state.fname} onChange={this.onChangeHandler} />
                </div>
                <div className="lname">
                    <h4>Last Name</h4>
                <input type="text" placeholder="Enter Last Name" id="lname" value={this.state.lname} onChange={this.onChangeHandler} />
                </div>
                <div className="id">
                    <h4>Email Id</h4>
                <input type="text" placeholder="Enter Email Id" id="id" value={this.state.id} onChange={this.onChangeHandler} />
                </div>
                    <h4>Password</h4>
                <div className="pw">
                <input type="text" placeholder="Enter Password" id="pw" value={this.state.pw} onChange={this.onChangeHandler}/>
                </div>
                <div className="signup-btn">
                    <button className="btn btn-success" onClick={this.signUpHandler} >SignIn</button>
                    <h2>{this.state.error}</h2>
                </div>
            </div>
         );
    }
}
 
export default SignUp;