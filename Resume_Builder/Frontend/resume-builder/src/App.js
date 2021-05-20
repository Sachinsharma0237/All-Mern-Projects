import React, { Component } from 'react';
import firebaseApp from "./firebase/firebaseConfig";
import Navbar from "./Components/Navbar/navbar";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import About from './Components/About/About';
import Templates from './Components/Templates/Templates';
import Profile from './Components/Profile/Profile';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';

class App extends Component {
  state = {
      isAuth : true,
      user : null
    }


    login = (id, pw) =>{
      firebaseApp.auth().signInWithEmailAndPassword(id, pw).then( (obj)=>{
        console.log("Logged In!!!!");
        console.log(obj);
        this.setState({
          isAuth:true
        })
      })
    }


    logout = () =>{
      firebaseApp.auth().signOut().then( obj=>{
        console.log("Signed out");
        this.setState({
          isAuth : false,
          user : null
        })
      })
    }

    signUp = (id, pw) =>{
      console.log(id, pw);
      firebaseApp.auth().createUserWithEmailAndPassword(id,pw).then( obj=>{
        console.log("Sign Up");
        let uid = obj.user.uid;
        let name = obj.user.name;
        let email = obj.user.email;
        this.setState({
          isAuth:true
          })  
    })}

  componentDidMount(){
    firebaseApp.auth().onAuthStateChanged( (user)=>{
      console.log("Inside auth state change", user);
        this.setState({
          isAuth: user ? true : false,
          user : user ? user.uid : null
        })
    })
  }


  render() { 
    let {isAuth} = this.state;
    return ( 
      <Router>
        <div className="App">
        <Navbar isAuth={isAuth} logout={this.logout} ></Navbar>    
          <Switch>
          <Route path="/" exact>
          <LandingPage></LandingPage>
          </Route>

          <Route path="/about" exact>
          <About></About>
          </Route>

          <Route path="/templates" exact>
            { isAuth ? (<Templates></Templates>) : ( <Redirect to="/login"></Redirect> )}
          </Route>
          
          <Route path="/profile" exact>
          { isAuth ? (<Profile></Profile>) : ( <Redirect to="/login"></Redirect> )}
          </Route>

          <Route path="/signup" exact>
          { isAuth ? ( <Redirect to="/"></Redirect> ) : (<SignUp signUp={this.signUp}></SignUp>) }
          </Route>

          <Route path="/signin" exact>
          { isAuth ? ( <Redirect to="/"></Redirect> ) : (<SignIn login={this.login} ></SignIn>) }
          </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
 
export default App;