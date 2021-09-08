import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
    state = {  }

    handleSubmit = (e) =>{
        e.preventDefault();

        axios({
            method: "POST",
            data: {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                username: this.username,
                password: this.password,
                confirmPassword: this.confirmPassword
            },
            withCredentials: true,
            url: "http://localhost:4000/signup"
        }).then(( res ) => console.log(res));

    }


    render() { 
        return ( 
        <div className="container">
        <div className="col-sm-6 col-sm-offset-3">

        <h1> <span className="fa fa-sign-in"></span> Signup</h1>

            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First Name"
                    onChange={ e => this.firstName = e.target.value } />
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name"
                    onChange={ e => this.lastName = e.target.value } />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email"
                    onChange={ e => this.email = e.target.value } />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username"
                    onChange={ e => this.username = e.target.value } />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password"
                    onChange={ e => this.password = e.target.value } />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Password"
                    onChange={ e => this.confirmPassword = e.target.value } />
                </div>

                <button className="btn btn-warning btn-lg">Signup</button>
            </form>

            <hr/>

            <p>Already have an account? <Link to="/login">Login</Link></p>
            <p>or go <Link to="/">home</Link>.</p>

        </div>
    </div> );
    }
}
 
export default Signup;