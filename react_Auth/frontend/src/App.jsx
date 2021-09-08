import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Signup from './Components/Signup/Signup';
import axios from 'axios';
import Bcrypt from 'bcryptjs';
import Cookies from 'js-cookie';
import './App.css';
class App extends Component {

  state = { 
      isAuth: false,
      user: null,
      Auth: false
   }

   readCookie=()=>{
    const user = Cookies.get("user");
        if( user ){
            this.setState({
              isAuth: true
            })
        }else{
          this.setState({
            isAuth: false
          })
        }
   }

   componentDidMount(){
    axios.get("auth/checkAuth").then( obj =>{
      console.log("CheckAuth",obj);
       if( obj.data.isAuth ){
           this.setState({
             isAuth: true,
             user: obj.data.user
           })
          } 
       })
       this.readCookie();
    }

    componentWillUnmount(){
      this.readCookie();
    }


    logout=()=>{
          Cookies.remove('user');
          axios.get("/auth/destroyCookie")
          .then( obj =>{
            console.log(obj);
          })
          this.setState({
          isAuth : false,
          user: null
        })
    }


    login = async(email, password) =>{
        try{
          const res = await axios({
            method: "POST",
            data: {
              username: email,
              password: password,
            },
            withCredentials: true,
            url: "http://localhost:5000/auth/login",
          })
          if(res.data.user){
            this.setState({
              isAuth: true,
              Auth: false
              })
            const hashedSessionId = await Bcrypt.hash(res.data.user._id, 10);
            Cookies.set("user", hashedSessionId, { expires: 0.000347222 });
          }
        }
        catch(err){
          console.log(err);
        }
    }



   register = async (email, password) =>{
      try{
        const res = await axios({
          method: "POST",
          data: {
            username: email,
            password: password,
          },
          withCredentials: true,
          url: "http://localhost:5000/auth/signup",
        })

        if( !res.data.doc ){
          console.log(res);
          this.setState({
            Auth: true
          })
        }else{
          window.alert("user already exist! please login");
        }
        
      }
      catch(err){
        console.log(err);
      }
      
    
    }

  render() { 
        
    return ( 
        <Router>
          {
            this.state.Auth ? <Redirect to="/" ></Redirect> : <div></div>
          }

          <div className="app">
          <Header isAuth={this.state.isAuth} logout={this.logout}  />
          <Switch>
             <Route path="/" exact >
              { this.state.isAuth ? <Home readCookie={this.readCookie} user={this.state.user} /> : <Login login={this.login} /> }
             </Route>

             <Route path="/profile" exact >
              { this.state.isAuth ? <Profile readCookie={this.readCookie} user={this.state.user} /> : <Login login={this.login}/> }
             </Route>

             <Route path="/signup" exact >
               { this.state.isAuth ? <Home readCookie={this.readCookie} user={this.state.user} /> : <Signup register={this.register}/> }
             </Route>
              
             <Route path="*" exact>
                <Redirect to="/" ></Redirect>
             </Route>

          </Switch>
          </div>
        </Router> 
          )}
}
 
export default App;