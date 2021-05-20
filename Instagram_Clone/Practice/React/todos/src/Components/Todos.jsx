// class based component

import React, { Component } from 'react';

class Todos extends Component {
    state = {  }
    render() { 
        let todos = this.props.todos;
        let deleteTodo = this.props.deleteTodo;
        return ( 
            <div className="todos container ">
                { todos.map( todoObj =>{
                    return <div className="input-group mb-3">
                        <input className="form-control" value = {todoObj.todo} disabled></input>
                        <button className="btn btn-danger" onClick = { ()=>deleteTodo(todoObj.id)}>DELETE</button>
                    </div>
                }) }
            </div>
         );
    }
}
 
export default Todos;