import React, { Component } from 'react';
import './App.css'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Header from './Components/Header';

class App extends Component {
    state = {

    }
    render() {
        return (
            <div className="app">
                <Router>
                <Header></Header>
                <div className="navbar"> 
                <input type="checkbox" id="check"/>
                <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
                </label>
                <nav>
                <Switch>
                    <Route className="active" path="/" >Home
                        <Home></Home>
                    </Route>
                    <Route path="/about" >About
                        <About></About>
                    </Route>
                    <Route path="/services">Services
                        <Services></Services>
                    </Route>
                    <Route path="/contact" >Contact
                        <Contact></Contact>
                    </Route>
                    <Route path ="*" exact>
                        <Redirect to="/" ></Redirect>
                        <Home/>
                    </Route>
                </Switch>
                </nav>
                </div>
            </Router>
            </div>
        );
    }
}

export default App;