import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

class Login extends Component {
    
    state = {  
        email: "",
        password: ""
        }

    onChangeHandler = (e) =>{
        let type = e.target.id;
        let value = e.target.value;
        this.setState({
            [type]: value
        })       
    }    

    onThirdPartyClick =(e)=>{
        e.preventDefault();
        const GOOGLE = "http://localhost:5000/auth/google";
        const FACEBOOK = "http://localhost:5000/auth/facebook";
        console.log(e.target.id);
        if(e.target.id == 'google'){
            window.location = GOOGLE;
        }else if(e.target.id == 'facebook'){
            window.location = FACEBOOK;
        }
    }

    render() { 
        
        let { email, password } = this.state;

        return (
            <div className="container">
            <form >
              <div className="row">
                <h2 style={{textAlign:"center", color:"green"}}>Login</h2>
                
                <div className="col">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" id="email" className="form-control" placeholder="Email"
                        value={email}
                        onChange={ (e) => this.onChangeHandler(e) } />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" id="password" className="form-control" placeholder="Password"
                        value={password}
                        onChange={ (e) => this.onChangeHandler(e) } />
                    </div>

                    <br/>
                    <button type="button" className="login-btn"  onClick={()=>{this.props.login(email, password)}}>Login</button>
                    
                    <div className="links">
                        <Link style={{color:"grey"}} to="/signup">New Here? Signup</Link>
                        <Link style={{color:"grey"}} to="/sendOtp">Signup Using OTP</Link> 
                    </div>
                </div>

          

                <span className="vl-innertext">OR</span>

                <div className="col">
                    <div className="google btn" onClick={this.onThirdPartyClick} id="google">
                    <i className="fa fa-google fa-fw"></i> Login with Google
                    </div>

                    <div className="fb btn"onClick={this.onThirdPartyClick} id="facebook">
                    <i className="fa fa-facebook fa-fw"></i> Login with Facebook
                    </div>
                </div>


              </div>
            </form>
            

          </div>
         );
    }
}
 
export default Login;