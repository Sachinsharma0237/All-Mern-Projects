import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import About from './Views/About/About';
import Services from './Views/Services/Services';
import Contact from './Views/Contact/Contact';
import HomePage from './Views/Home/HomePage';
import Navbar from './Views/Navbar/Navbar';
import './App.css';
import Header from './Views/Navbar/Header';

class App extends Component {

    render() {
        return (
                <Router>
                 <div className="app">
                    <Navbar/>
                    {/* <Header/> */}
                    <Switch>
                        <Route path="/" exact>
                            <HomePage/>
                        </Route>
                        <Route path="/about" exact >
                            <About/>
                        </Route>
                        <Route path="/services" exact>
                            <Services/>
                        </Route>
                        <Route path="/contact" exact>
                            <Contact/>
                        </Route>
                        <Route path ="*" exact>
                            <Redirect to="/" ></Redirect>
                            <HomePage/>
                        </Route>
                    </Switch>
                 </div>
                </Router>
        );
    }
}

export default App;