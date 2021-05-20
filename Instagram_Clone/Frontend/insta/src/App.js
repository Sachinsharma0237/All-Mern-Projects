import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Profile from './Components/Profile/Profile.jsx';
import Settings from './Components/Settings/Settings.jsx';
import axios from 'axios';
import Login from './Login/Login';

class App extends Component {   
  state = { 
    user:null,
    isAuth:false
   }

  login = () =>{
  window.location = "/auth/google";
  }

  logout = () =>{
    axios.get("/auth/destroyCookie").then( obj =>{
      this.setState({
        isAuth:false,
        user:null
      })
    })
  }

  componentDidMount(){
      axios.get("/auth/checkAuth").then( obj =>{
        if(obj.data.isAuth){
          this.setState({
            isAuth:true,
            user:obj.data.user
          })
        }
      })
  } 

  updatedUser = (updatedUser) =>{
      this.setState({
        user:updatedUser
      })
  }


  render() { 
    let user = this.state.user;
    return (  
      <Router>    
      <div className="app">
      <Header isAuth={this.state.isAuth} logout={this.logout}/>
      <Switch>
      <Route path="/" exact>
        { this.state.isAuth ? (<Home  user ={ user }/>) : (<Login login = {this.login}></Login>) }
      </Route>

      <Route path="/profile" exact>
      { this.state.isAuth ? <Profile user ={ user }/> : <Login login = {this.login}></Login> }
      </Route>

      <Route path="/settings" exact>
      { this.state.isAuth ?  <Settings user ={ user } updatedUser={this.updatedUser}/> : <Login login = {this.login}></Login> }
      </Route>

      <Route path ="*" exact>
        <Redirect to="/" ></Redirect>
      <Home/>
      </Route>
      </Switch>
      </div>
      </Router> );
  }
}
 
export default App;