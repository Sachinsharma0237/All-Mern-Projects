import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Profile from './Components/Profile/Profile.jsx'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';


class App extends Component {
      state = { 
        data:{
          name:"", 
          email:"", 
          age:"", 
          cheeks:"", 
          tZone:"", 
          skinConcerns:"", 
          allergic:"", 
          randomIssues:"" 
        },
          name:"", 
          email:"", 
          age:"", 
          cheeks:"", 
          tZone:"", 
          skinConcerns:"", 
          allergic:"", 
          randomIssues:"" 
      }

      updateParent = (data) =>{
        this.setState({
          data : data
        })
      }

  render() { 
    return ( 
    <Router>
      <div className="app">
        <Header></Header>
        <Switch>
          <Route path="/" exact>
          <Body updateParent={this.updateParent} ></Body>
          </Route>
          <Route path="/home" exact>
          <Body updateParent={this.updateParent} ></Body>
          </Route>
          <Route path="/profile" exact>
          <Profile myData={this.state} ></Profile>
          </Route>
          <Route path="*" exact>
          <Redirect to="/" ></Redirect>
          </Route>
        </Switch>
      </div>
    </Router> );
  }
}
 
export default App;