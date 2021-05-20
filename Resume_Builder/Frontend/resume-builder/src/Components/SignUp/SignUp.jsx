import React, { Component } from 'react';
import './SignUp';

class SignUp extends Component {
    state = { 
        id:"",
        pw:""
     }

    onChangeHandler =(e)=>{
        let id = e.target.id;
        let value = e.target.value;
        //console.log(id, value);
        this.setState({
            [id]:value
        })
    }
     
    render() { 
        return ( 
            <div className="sign-up">
                <div className="uid">
                    <h4>Email Id</h4>
                <input type="text" placeholder="Enter Email Id" id="id" value={this.state.id} onChange={this.onChangeHandler} />
                </div>
                    <h4>Password</h4>
                <div className="pw">
                <input type="text" placeholder="Enter Password" id="pw" value={this.state.pw} onChange={this.onChangeHandler}/>
                </div>
                <div className="signin-btn">
                    <button onClick={(e)=>{this.props.signUp(this.state.id, this.state.pw)}} >SignIn</button>
                </div>
            </div>
         );
    }
}
 
export default SignUp;