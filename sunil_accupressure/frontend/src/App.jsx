import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import './App.css';
import Footer from "./Components/Footer/Footer";
import Query from "./Components/Query/Query";
import axios from 'axios';
import Contact from "./Components/Contact/Contact";
import CardList from "./Components/Cardlist/Cardlist";
import About from "./Components/About/About";

class App extends Component {

  register = async ( fullName, email, dob, gender, in_state, query, phone ) =>{
    try{
        if( fullName && phone && gender && dob != null ){
          const res = await axios({
            method: "POST",
            data: {
              fullName: fullName,
              email: email,
              query: query,
              dob: dob,
              gender: gender,
              phone: phone,
              state: in_state
            },
            withCredentials: true,
            url: "/auth/signup",
          })
  
          if( !res.data.doc ){
            console.log(res);
            window.alert("Query Sent to us, We'll respond ASAP!");
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
      return <div className="app">
        <Router>
          <Navbar/>
          <Switch>
              <Route path="/" exact>
                <Home/>
                <Content/>
                <Footer/>
              </Route>
              <Route path="/about" exact>
                <About/>
              </Route>

              <Route path="/treatment" exact>
                <CardList/>
              </Route>
              
              <Route path="/query" exact>
                <Query/>
              </Route>

               <Route path="/contact" exact>
                <Contact/>
              </Route>

              <Route path="*" exact>
                <Redirect to="/" ></Redirect>
              </Route>

              </Switch>
            </Router>
      </div>
  }
}

export default App;
