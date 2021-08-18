import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Forgot extends Component {
    state = {  }

    handleSubmit = (e) =>{
        e.preventDefault();
        const data = {
            email: this.email
        };
        console.log(data);
    }

    render() { 
        return ( 
        <div className="container">
        <div className="col-sm-6 col-sm-offset-3">

        <h1> <span className="fa fa-sign-in"></span> Forgot Password</h1>

            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="First Name"
                    onChange={ e => this.email = e.target.value } />
                </div>

                <button className="btn btn-warning btn-lg">Submit</button>
            </form>

            <hr/>

            <p>Need an account? <Link to="/signup">Signup</Link></p>
            <p><Link to="/forgot">Forgot Passowrd</Link>.</p>
            <p>or go <Link to="/">home</Link>.</p>

        </div>
    </div> );
    }
}
 
export default Forgot;