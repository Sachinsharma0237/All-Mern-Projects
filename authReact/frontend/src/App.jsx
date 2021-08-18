import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from './Components/Index/Index';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

class App extends Component {
  state = {};
  render() {
    return (
        <Router className="app">
            <Switch>

                <Route path="/" exact>
                    <Index/>
                </Route>

                <Route path="/login" exact>
                    <Login/>
                </Route>

                <Route path="/signup" exact>
                    <Signup/>
                </Route>

            </Switch>
        </Router>
    );
  }
}

export default App;
