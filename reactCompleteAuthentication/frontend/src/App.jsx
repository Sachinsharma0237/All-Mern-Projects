import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import OTP from './Components/OTP/OTP';
import axios from 'axios';
import Bcrypt from 'bcryptjs';
import Cookies from 'js-cookie';
import './App.css';
class App extends Component {

  state = { 
      isAuth: false,
      user: null,
      Auth: false,
      ssid: ""
   }

   readCookie=()=>{
    const user = Cookies.get("user");
        if( user || this.state.ssid ){
            this.setState({
              isAuth: true
            })
        }else{
          this.setState({
            isAuth: false,
            Auth: false,
            ssid: "",
            user: null
          })
        }
   }

   componentDidMount(){
    axios.get("auth/checkAuth").then( obj =>{
      console.log(obj);
       if( obj.data.isAuth ){
           this.setState({
             isAuth: true,
             user: obj.data.user,
             Auth: true,
             ssid: obj.data.ssid
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
            isAuth: false,
            Auth: false,
            ssid: "",
            user: null
        })
    }
    
    login = async(email, password) =>{
        try{
          const data = { username: email, password: password };
          var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if(data.username.match(mailformat)){
            const res = await axios({
              method: "POST",
              data: data,
              withCredentials: true,
              url: "http://localhost:5000/auth/login",
            })
            console.log(res);
            if(res.data.user){
              this.setState({
                isAuth: true,
                Auth: false
                })
              const hashedSessionId = await Bcrypt.hash(res.data.user._id, 10);
              Cookies.set("user", hashedSessionId, { expires: 0.000347222 });
            }
          }else{
            window.alert("Email is Invalid");
          }
        }
        catch(err){
          console.log(err);
        }
    }



   register = async ( fullName, email, password, dob, gender, occupation, in_state, city ) =>{
      try{
          if( fullName && email && password && gender && dob != null ){

            const res = await axios({
              method: "POST",
              data: {
                fullName: fullName,
                email: email,
                password: password,
                dob: dob,
                gender: gender,
                occupation: occupation,
                state: in_state,
                city: city
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

          }else{
            window.alert("Fill required field with * symbol");
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
          <Switch>
             <Route path="/" exact >
              { this.state.isAuth ? <Home readCookie={this.readCookie} user={this.state.user} logout={this.logout}/> : <Redirect to="/login" ></Redirect> }
             </Route>

             <Route path="/login" exact>
             { this.state.isAuth ? <Redirect to="/" ></Redirect> : <Login login={this.login} /> }
             </Route>

             <Route path="/signup" exact >
               { this.state.isAuth ? <Home readCookie={this.readCookie} user={this.state.user} /> : <Signup register={this.register}/> }
             </Route>
              
             <Route path="/sendOtp" exact>
              <OTP/>
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