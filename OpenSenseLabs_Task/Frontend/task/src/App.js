import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import View from './Components/View/View';
import firebaseApp from './firebase/firebaseConfig';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

class App extends Component {
  state = { 
    todayTasksArray:[],
    pendingArray:[],
    abandonArray:[],
    completedArray:[],
    inprogressArray:[],
    allData:[],
    flag:false
   }
  
   addToDo=( todayTasks)=>{
     this.setState({
       todayTasksArray:[...this.state.todayTasksArray, {id:this.state.todayTasksArray.length+1, todayTasks:todayTasks}],
     })
   }
   addPending=( pending)=>{
     this.setState({
      pendingArray:[...this.state.pendingArray, {id:this.state.pendingArray.length+1, pending:pending}],
     })
   }
   addAbandon=( abandon)=>{
     this.setState({
      abandonArray:[...this.state.abandonArray, {id:this.state.abandonArray.length+1, abandon:abandon}],
     })
   }
   addCompleted=( completed)=>{
     this.setState({
      completedArray:[...this.state.completedArray, {id:this.state.completedArray.length+1, completed:completed}],
     })
   }
   addInprogress=( inprogress)=>{
     this.setState({
      inprogressArray:[...this.state.inprogressArray, {id:this.state.inprogressArray.length+1, inprogress:inprogress}],
     })
   }

   componentDidMount(){
    
   }

   addDataHandler=()=>{
    firebaseApp.firestore().collection("users").doc("cnumn6NPJQIUPMcKxE6t").set({
          todayTasksArray: this.state.todayTasksArray,
          pendingArray: this.state.pendingArray,
          abandonArray: this.state.abandonArray,
          completedArray: this.state.completedArray,
          inprogressArray: this.state.inprogressArray,
    }).then( ()=>{
        console.log("data Added");
    })
   }

   viewAllDataHandler=()=>{
      firebaseApp.firestore().collection("users").get().then( allDocs=>{
      allDocs.forEach(doc =>{
        console.log(doc.data());
        this.setState({
          allData: doc.data(),
          flag: true
        })
      })
    })
   }

  render() { 
    return ( <div className="app">
      <Router>
        <Header></Header>
        <Switch>
            <Route path="/" exact>
              <Home addToDo={this.addToDo} addPending={this.addPending} addAbandon={this.addAbandon}
                    addCompleted={this.addCompleted} addInprogress={this.addInprogress} />
            </Route>
        </Switch>

        <Switch>
            <Route path="/profile" exact>
                <Profile todayTasksArray={this.state.todayTasksArray} pendingArray={this.state.pendingArray}
                         abandonArray={this.state.abandonArray} completedArray={this.state.completedArray}
                         inprogressArray={this.state.inprogressArray} />
            </Route>
        </Switch>

        <Switch>
            <Route path="/view" exact>
                <View addDataHandler={this.addDataHandler} viewAllDataHandler={this.viewAllDataHandler} allData={this.state.allData} 
                       flag={this.state.flag}   />
            </Route>
        </Switch>


        <Route path="*" exact>
            <Redirect to="/"></Redirect>
        </Route>

      </Router>
      </div> );
  }
}
 
export default App;

