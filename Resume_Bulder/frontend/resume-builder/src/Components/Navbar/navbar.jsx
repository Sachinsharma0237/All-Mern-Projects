import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./navbar.css";
class Navbar extends Component {
    state = {  }
    render() { 
        return (  
            <div className="navbar navbar-dark bg-dark">
            <Link to="/">
            <div className="logo">
                <img src="./logo/logo.png" alt="" />
            </div>
            </Link>
            {
                this.props.isAuth? (
                    <div className="navlinks">
                <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            {/* <li>
                                <Link to="/contact">Contact</Link>
                            </li> */}
                            <li>
                                <Link to="/templates">Templates</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/myresumes">MyResumes</Link>
                            </li>
                            <li>
                                <Link onClick ={this.props.logout} >Logout</Link>
                            </li>
                </ul>
                    </div>
                ) :
                (
                    <div className="navlinks">
           <ul>
               <li>
                    <Link to="/">Home</Link>
               </li>
               <li>
                    <Link to="/about" >About</Link>
               </li>
               <li>
                   <Link to="/signup">Signup</Link>
               </li>
               <li>
                    <Link to="/signin">Signin</Link>
               </li>
           </ul>
                    </div>   
                ) 
           }
            </div>
         )
    }
}
 
export default Navbar;