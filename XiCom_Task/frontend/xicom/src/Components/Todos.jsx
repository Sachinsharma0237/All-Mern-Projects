import React, { Component } from 'react';
import './Todos.css';
import axios from 'axios';

class Todos extends Component {
    state = { 
        disabled:true,
        val:null
     }

     onEditHandler =(e, id)=>{
         console.log(e);
        this.setState({
            disabled:false
        })
     }

     onSaveHandler =(id)=>{
         let formData = new FormData();
         formData.append("price", this.state.val )
        axios.patch(`/api/user/${id}`, formData).then(obj =>{
            console.log(obj);
        })
     }


    render() { 
        let todos = this.props.todos;
        let deleteTodo = this.props.deleteTodo;
        return ( <div div className="todos container">
                {
                    todos.map( todoObj =>{
                        return <div className="input-group">
                            <input type="text" className="input1" key= {todoObj.id} value= {todoObj.id} disabled/>
                            <input type="text" className="input1" key= {todoObj.id+1}  value= { '0000' + todoObj.id} disabled/>
                            <input type="text"  className="input1" key= {todoObj.id+2}  value= {todoObj.todo} disabled={this.state.disabled}/>
                            <button onClick={ ()=>deleteTodo(todoObj.id) }>DELETE</button>
                            {/* <button  value={this.state.val} onClick={ (e)=>this.onEditHandler(e, todoObj.id) }>EDIT</button>
                            <button onClick={ ()=>this.onSaveHandler(todoObj.id) }>SAVE</button> */}
                        </div>
                    })
                }
            </div>
        );
    }
}
 
export default Todos;