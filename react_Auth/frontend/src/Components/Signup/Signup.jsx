import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
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
        let { email, password } = this.state;
        return ( 
        <div className="container">
        <div className="col-sm-6 col-sm-offset-3">
        <h1> <span className="fa fa-sign-in"></span> Signup</h1>
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
                <button type="button" className="btn btn-warning btn-lg"  onClick={()=>{this.props.register(this.state.email, this.state.password)}}>Signup</button>
            </form>
            <hr/>
            <p>Already have an account? <Link to="/login">Login</Link></p>
            <p>or go <Link to="/">home</Link>.</p>

        </div>
    </div> );
    }
}
 
export default Signup;