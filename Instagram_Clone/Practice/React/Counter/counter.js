//Class Based Component
class Counter extends React.Component{

    //1. first constructor method call
    constructor(){
        super();       
        this.state = {
            count : 0
        };
    }

    //jo  this ho wo iss class ka hi this ho global na ho!!!
    increment = () =>{  
        console.log("Increment");
        // Set State  ===>>>> Render Method is called again
        this.setState({
            count:this.state.count+1
        })
    }

    decrement = () =>{
        console.log("Decrement");
        if(this.state.count > 0){
            this.setState({
                count:this.state.count-1
            })
        }
    }

    reset = () =>{
        console.log("Reset");
        this.setState({
            count:this.state.count = 0
        })
    }

    //2. Render Method Call
    render(){
        return <React.Fragment>
            <div className = "container ">
            <p className = "display-1">{this.state.count}</p>
            <button className = "btn btn-primary" onClick={this.increment}>+</button>
            <button className = "btn btn-danger" onClick={this.decrement}>-</button>
            <button className = "btn btn-warning" onClick={this.reset}>RESET</button>
            </div>
        </React.Fragment>
    }

}



ReactDOM.render( <Counter/> , document.getElementById("root"));