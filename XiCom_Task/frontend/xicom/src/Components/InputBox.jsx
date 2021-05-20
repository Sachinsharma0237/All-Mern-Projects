import React, { Component } from 'react';
import './InputBox.css';

class InputBox extends Component {
    state = { 
     }

     onChangeHandler =(e)=>{
        let id = e.target.id;
        let value = e.target.value;
        this.setState({
            [id]:value
        })
     }
     addTodoHandler =()=>{
         this.props.addToDo(this.state.todo);
         this.setState({
             todo:""
         })
     }


    render() { 
        return ( <div className="input-group">ID 
                <input type="text" name="" id="id" className="input1" key={this.state.id} value={this.state.id} onChange={(e)=>{this.onChangeHandler(e)}} disabled/>Ticket No
                <input type="text" name="" id="id" className="input1" key={this.state.id}   value={this.state.id} onChange={(e)=>{this.onChangeHandler(e)}} disabled/>Price
                <input type="text" name="" id="todo" className="input1" key={this.state.id}   value={this.state.todo} onChange={(e)=>{this.onChangeHandler(e)}}/>
                <button onClick={this.addTodoHandler}>SAVE</button>
        </div>
         );
    }
}
 
export default InputBox;