import React, { Component } from 'react';
import Home from './Components/Home';
import InputBox from './Components/InputBox';
import Todos from './Components/Todos';
class App extends Component {
  state = { 
    todos:[]
   }

   addToDo = (todo)=>{
     this.setState({
       todos:[ ...this.state.todos, {id:this.state.todos.length+1, todo:todo}]
     })
   }

   deleteTodo = (id)=>{
     let filteredTodos = this.state.todos.filter( todoObj =>{
       return todoObj.id != id;
     })
     this.setState({
       todos:filteredTodos
     })
   }


  render() { 
    return ( <div className="app">
      <Home myTicket = {this.state.todos} ></Home>
      <InputBox addToDo = {this.addToDo} ></InputBox>
      <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo} ></Todos>
    </div> );
  }
}
 
export default App;