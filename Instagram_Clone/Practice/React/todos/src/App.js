import React, { Component } from 'react';
import InputBox from './Components/InputBox';
import Todos from './Components/Todos';

class App extends Component {
  state = { 
    todos:[]
  }

  addToDo = (todo) =>{
    this.setState({
      todos:[ ...this.state.todos, { id:this.state.todos.length+1, todo:todo }]
    })
  }

  deleteTodo = (id) =>{
    let filteredTodos = this.state.todos.filter(  todoObj =>{
      return todoObj.id != id;
    })
    this.setState({
      todos:filteredTodos
    })
    //this will trigger render function again
  }


  render() { 
    return ( 
      <div className="container">
        <InputBox addToDo={this.addToDo}/>
        <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
      </div>
     );
  }
}
 
export default App;