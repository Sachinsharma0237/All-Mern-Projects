import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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


    render() { 
        const GOOGLE = "http://localhost:5000/auth/google";
        const FACEBOOK = "http://localhost:5000/auth/facebook";
        const AMAZON = "http://localhost:5000/auth/amazon";
        const TWITTER = "http://localhost:5000/auth/twitter";
        const LINKEDIN = "http://localhost:5000/auth/linkedin";
        const GITHUB = "http://localhost:5000/auth/github";

        let { email, password } = this.state;
        return (
            <div className="container">
                <div className="col-sm-6 col-sm-offset-5">

                <h1> <span className="fa fa-sign-in"></span> Login</h1>
                    <form >
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

                    <hr/>
                    <button type="button" className="btn btn-warning btn-lg"  onClick={()=>{this.props.login(this.state.email, this.state.password)}}>Login</button>
                    </form>

                    <hr/>
                <p>Need an account? <Link to="/signup">Signup</Link></p>
                {/* <p><Link to="/forgot">Forgot Password</Link>.</p> */}
                <p>or go <Link to="/">home</Link>.</p>
                <hr/>

                <div className="link-button">
                <button className="btn btn-warning"  onClick={() => window.location = GOOGLE} >Google+</button>
                <button className="btn btn-warning"  onClick={() => window.location = FACEBOOK} >Facebook</button>
                <button className="btn btn-warning"  onClick={() => window.location = AMAZON} >Amazon</button>
                <button className="btn btn-warning"  onClick={() => window.location = TWITTER} >Twitter</button>
                <button className="btn btn-warning"  onClick={() => window.location = LINKEDIN} >LinkedIn</button>
                <button className="btn btn-warning"  onClick={() => window.location = GITHUB} >GitHub</button>
                </div>

            </div>
            </div>
         );
    }
}
 
export default Login;