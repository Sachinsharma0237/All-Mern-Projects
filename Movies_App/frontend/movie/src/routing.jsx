import React, { Component } from 'react';
import {Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from './App';

class Routing extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
            
            <Switch>
            <Route path="/" exact>
                <Home></Home>
            </Route>
            </Switch>

            </Router>


         );
    }
}
 
export default Routing;