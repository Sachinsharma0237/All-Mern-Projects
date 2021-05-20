import React, { Component } from 'react';
class Counter extends Component {
    styles = {
         margin: 5,
     }

    formatCounter = () =>{
        let value  = this.props.value; 
        return value === 0 ? 'Zero' : value;
    }
    getBadgeClasses = () =>{
        let classes = "badge bg-";
        classes += this.props.value === 0 ? "warning ms-3 mt-2 p-2" : "primary ms-3 mt-2 p-2";
        return classes;
    }
    
    // componentWillUnmount(){
    //     console.log("component unmounted");
    // }

    // componentDidMount(){
    //     console.log("component Mounted");
    // }

    // componentDidUpdate(){
    //     console.log("Component updated");
    // }

    render() { 
        return ( <div>
            <h4>Counter #{this.props.id}</h4>
            <span style={this.styles} className={this.getBadgeClasses()} >{this.formatCounter()}</span>
            <button style={this.styles} onClick={ ()=> this.props.onIncrement(this.props) } className="btn btn-secondary ms-3 p-2" >Increment</button>
            <button onClick ={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2 p-2">Delete</button>
        </div>);
    }
}
 
export default Counter;