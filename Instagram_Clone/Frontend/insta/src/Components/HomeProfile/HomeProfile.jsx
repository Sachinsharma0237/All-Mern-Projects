import axios from 'axios';
import React, { Component } from 'react';
import "./HomeProfile.css"

class HomeProfile extends Component {
    state = { 
        suggestions : null
     }

    componentDidMount(){
        let uid = this.props.user["_id"];
        axios.get(`/api/request/suggestions/${uid}`).then( obj =>{
            let suggestions = obj.data.suggestions;
            this.setState({
                suggestions:suggestions
            })
        } )
    }

    render() { 
        let { name, username, profilePic } = this.props.user;
        return ( 
            <div className="home-profile">
                <div className="user-info">
                    <div className="user-image">
                        <img src= {profilePic} />
                    </div>
                    <div className="name">
                        <div className="myusername"><strong>{username}</strong> 
                        <div className="myname">{name}</div>
                        </div>
                    </div>

                </div>
                    { this.state.suggestions ? ( <div className="user-suggestions">Suggestions For You
                    { this.state.suggestions.map( suggestionUser => {
                        return <div key = {suggestionUser["_id"]} className="suggestion-user">
                            <div className="suggestion-profile-photo">
                                <img src= { suggestionUser.profilePic } alt=""/>
                            </div>
                            <div className="suggestion-details">
                                <div className="username">{suggestionUser.username}
                                </div>
                                {/* <div className="name">{suggestionUser.name}</div> */}
                            </div>
                            <div className="follow-btn">
                                <div>Follow</div>
                            </div>
                        </div>
                    }) }
                    </div> ) : (<div className="no-suggestion" >No suggestions</div>) }
                    

            </div>
         );
    }
}
 
export default HomeProfile;