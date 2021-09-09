import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './Login.css'
Modal.setAppElement("#root");

class Login extends Component {
    
    state = {  
        email: "",
        password: "",
        modalIsOpen : false,
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

    setModalState=()=>{
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    render() { 
        
        let { email, password, modalIsOpen } = this.state;

        return (
            <div className="login_component">
            <button onClick={this.setModalState} >Login/Signup</button>
            <Modal className="modal" 
            isOpen={modalIsOpen} 
            onRequestClose={this.setModalState}
            style={
                {
                    overlay:{
                        backgroundColor: 'white'
                    },
                    content:{
                        
                    }
                }
            }
            
            >
                <div className="logincontainer">
            <form >
              <div className="row">
                <h2 style={{textAlign:"center", color:"green"}}>Login</h2>
                <div className="loginclose" onClick={this.setModalState}>x</div>
                
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
                        <Link style={{color:"grey"}} to="/forgot">Forgot Your Password?</Link>
                        <Link style={{color:"grey"}} to="/sendOtp">New Here? Signup</Link> 
                    </div>
                <span className="vl-innertext">OR</span>

                </div>

                <div className="col">
                    <div className="google btn" onClick={this.onThirdPartyClick} id="google">
                    <i className="fa fa-google fa-fw"></i> Login with Google
                    </div>

                    <div className="fb btn"onClick={this.onThirdPartyClick} id="facebook">
                    <i className="fa fa-facebook fa-fw"></i> Login with Facebook
                    </div>
                </div>

                <div className="proceeding">
                    By proceeding, you agree to our 
                    <a href="https://www.amarujala.com/terms-and-conditions">Terms & Conditions</a>
                    . To find out what personal data we collect and how we use it, please visit our 
                    <a href="https://www.amarujala.com/privacy-policy">Privacy Policy</a>
                </div>



              </div>
            </form>
            

          </div>
            </Modal>
            </div>
         );
    }
}
 
export default Login;