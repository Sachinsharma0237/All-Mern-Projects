import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
    state = {  }

   

    componentWillUnmount(){
        this.props.readCookie();
    }

    render() { 
        return ( <div className="home">
            <h1>Home Component</h1>
            <Link to="/logout" onClick={this.props.logout}>Logout</Link>
        </div> );
    }
}
 
export default Home;