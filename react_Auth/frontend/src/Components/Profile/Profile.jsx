import React, { Component } from 'react';

class Profile extends Component {
    state = {  }

    

    componentWillUnmount(){
        this.props.readCookie();
    }

    render() { 
        return ( <div className="profile">
            Im Profile
        </div> );
    }
}
 
export default Profile;