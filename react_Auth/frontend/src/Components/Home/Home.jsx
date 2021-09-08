import React, { Component } from 'react';

class Home extends Component {
    state = {  }

   

    componentWillUnmount(){
        this.props.readCookie();
    }

    render() { 
        return ( <div className="home">
            Im Home
        </div> );
    }
}
 
export default Home;