import React, { Component } from 'react';
import Counter from './Counter';


class Counters extends Component {
    state = { 
        counters:[
            { id : 1, value : 0 },
            { id : 2, value : 0 },
            { id : 3, value : 0 },
            { id : 4, value : 0 },
        ]
     };

    handleDelete =(counterId) =>{
       const counters = this.state.counters.filter( (c)=> c.id != counterId )
            this.setState({
                counters
            })
    }

    handleReset =() =>{
        const counters = this.state.counters.map( c =>{
            c.value = 0;
            return c;
        })
    }

    handleIncrement =counter=>{
        console.log(counter);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        console.log(index);
        counters[0] = {...counter};
        counters[0].value++;
        console.log(this.state.counters[0]);
    };

    

    render() { 
        return ( <div>
            <button onClick={this.handleReset} className="btn btn-secondary ms-5 p-1">Reset</button>
            { this.state.counters.map( (counter)=>
                <Counter 
                key={counter.id} 
                value={counter.value} 
                id={counter.id}  
                onDelete={this.handleDelete} 
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}>
                <h4>Counter #{counter.id}</h4>
                </Counter>
            )}
        </div> );
    } 
}
 
export default Counters;