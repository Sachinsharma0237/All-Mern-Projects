import React, { Component } from 'react';
import './App.css';
import firebaseApp from "./firebase/firebaseConfig";
import Navbar from "./Components/Navbar/navbar";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import About from './Components/About/About';
import Templates from './Components/Templates/Templates';
import Profile from './Components/Profile/Profile';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Finalize from './Components/Finalize/Finalize';
import MyResumes from './Components/MyResumes/MyResumes';

class App extends Component {
  state = {
    isAuth: false,
    user: null,
    // selectResumeId: null,
    // resumeDetails : null
  };
  
    setResumeId = (id) =>{
        this.setState({
          selectedResumeId : id
        })
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
        firebaseApp.auth().signOut().then( obj =>{
          console.log("Signed Out!!!");
          this.setState({
            isAuth: false,
            user: null
          })
        } )
    }

    componentDidMount(){
      firebaseApp.auth().onAuthStateChanged( (userInfo)=>{
          console.log("Inside auth State Change of App.js(componentDidMount)",userInfo);
          this.setState({
              isAuth: userInfo ? true : false,
              user: userInfo ? userInfo.uid : null
          })
      } )
    }

  // componentDidMount(){
  //   firebaseApp.auth().onAuthStateChanged( async(user)=>{
  //     console.log("Inside auth state change", user);
  //     let selecteResumeId = null;
  //     // Check If Logged In??
  //     if(user){
  //       let doc = await firebaseApp.firestore().collection("users").doc(user.uid).get();
  //       let resumes = doc.data()["Resumes"];
  //       for(let i = 0; i < resumes.length; i++){
  //         if(resumes[i].isSelected){
  //           selecteResumeId = resumes[i].resumeId;
  //           break;
  //         }
  //       }
  //     }
  //       this.setState({
  //         isAuth: user ? true : false,
  //         user : user ? user.uid : null,
  //         selecteResumeId : selecteResumeId
  //       })
  //   })
  // }



  // componentDidMount(){
  //   console.log("hello");
  //     firebaseApp.firestore().collection("resumes").get().then( allDocs =>{
  //       allDocs.forEach( doc=>{
  //         console.log(doc.id); 
  //         console.log(doc.data()); 
  //       })
  //     })
  // }

  render() { 
    let {isAuth} = this.state;
    return ( 
      <Router>
        <div className="App">
        <Navbar isAuth={isAuth} logout={this.logout} ></Navbar>    
          <Switch>
          <Route path="/" exact>
          <LandingPage isAuth={isAuth}></LandingPage>
          </Route>

          <Route path="/about" exact>
          <About></About>
          </Route>

          <Route path="/contact" exact render ={ (props)=>this.state.isAuth ? <Contact {...props} uid={this.state.user} resumeId={this.state.selectedResumeId} setResumeId={this.setResumeId}></Contact> : <Redirect to="/signin"></Redirect>  } ></Route>  
          <Route path="/finalize" exact render ={ (props)=>this.state.isAuth ? <Finalize {...props} uid={this.state.user} resumeId={this.state.selectedResumeId} setResumeId={this.setResumeId}></Finalize> : <Redirect to="/signin"></Redirect>  } ></Route>  

          <Route path="/education" exact render ={ (props)=>this.state.isAuth ? <Education {...props} uid={this.state.user} resumeId={this.state.selectedResumeId} setResumeId={this.setResumeId}></Education> : <Redirect to="/signin"></Redirect>  } ></Route>  

          {/* <Route path="/myresumes" exact render ={ (props)=>this.state.isAuth ? <MyResumes {...props} uid={this.state.user} resumeId={this.state.selectedResumeId} setResumeId={this.setResumeId}></MyResumes> : <Redirect to="/signin"></Redirect>  } ></Route>   */}

          <Route path="/myresumes" exact render ={ (props)=>this.state.isAuth ? <MyResumes {...props} uid={this.state.user} resumeId={this.state.selectedResumeId} setResumeId={this.setResumeId}></MyResumes> : <Redirect to="/signin"></Redirect>}></Route>
          

          {/* <Route path="/contact" exact render={ (props) => this.state.isAuth ? <Contact {...props} uid={this.state.user} resumeId={this.state.selectedResumeId} setResumeId={this.setResumeId}></Contact> : <Redirect to="/signin" ></Redirect> }>
          <Contact></Contact>
          </Route> */}

          {/* <Route path="/templates" exact component={Templates} ></Route> */}
          {/* { isAuth ? (<Templates></Templates>) : ( <Redirect to="/login"></Redirect> )} */}

          <Route path="/templates" exact render ={ (props)=>this.state.isAuth ? <Templates {...props} uid={this.state.user} resumeId={this.state.selectedResumeId} setResumeId={this.setResumeId}></Templates> : <Redirect to="/signin"></Redirect>  } ></Route>  
          
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