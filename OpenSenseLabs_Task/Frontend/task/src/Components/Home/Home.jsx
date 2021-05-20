import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    state = { 
        todayTasks:"",
        pending:"",
        abandon:"",
        completed:"",
        inprogress:""
     }
     onClickHandler=(e)=>{
        let id = e.target.id;
        let value = e.target.innerHTML;
        this.setState({
            [id]:value
        })
     }
     addTaskHandler=(e)=>{
         this.props.addToDo(this.state.todayTasks);
         this.setState({
             todayTasks:""
         })
     }
     addPendingHandler=(e)=>{
         this.props.addPending(this.state.pending);
         this.setState({
             pending:""
         })
     }
     addAbandonHandler=(e)=>{
         this.props.addAbandon(this.state.abandon);
         this.setState({
            abandon:""
         })
     }
     addCompletedHandler=(e)=>{
         this.props.addCompleted(this.state.completed);
         this.setState({
            completed:""
         })
     }
     addInprogressHandler=(e)=>{
         this.props.addInprogress(this.state.inprogress);
         this.setState({
            inprogress:""
         })
     }

    render() { 
        return(
            <div className="home">
                <div className="dropdown" id="today-tasks">
                <button className="dropbtn">Today's Task</button>
                <div className="dropdown-content">
                    <a id="todayTasks" onDoubleClick={this.addTaskHandler} onClick={(e)=>this.onClickHandler(e)} >Learn JavaScript</a>
                    <a id="todayTasks" onDoubleClick={this.addTaskHandler} onClick={(e)=>this.onClickHandler(e)} >Clean Your Room</a>
                    <a id="todayTasks" onDoubleClick={this.addTaskHandler} onClick={(e)=>this.onClickHandler(e)} >Do Coding!</a>
                </div>
                </div>

                <div className="dropdown" id="pending">
                <button className="dropbtn">Pending</button>
                <div className="dropdown-content">
                    <a id="pending" onDoubleClick={this.addPendingHandler} onClick={(e)=>this.onClickHandler(e)}  >Finish Homework</a>
                    <a id="pending" onDoubleClick={this.addPendingHandler} onClick={(e)=>this.onClickHandler(e)}  >Pay the Bill</a>
                    <a id="pending" onDoubleClick={this.addPendingHandler} onClick={(e)=>this.onClickHandler(e)}  >Wash Dishes</a>
                </div>
                </div>

                <div className="dropdown" id="abandon">
                <button className="dropbtn">Abandon</button>
                <div className="dropdown-content">
                    <a id="abandon" onDoubleClick={this.addAbandonHandler} onClick={(e)=>this.onClickHandler(e)}  >Avoid Playing Games</a>
                    <a id="abandon" onDoubleClick={this.addAbandonHandler} onClick={(e)=>this.onClickHandler(e)}  >Avoid TV Series</a>
                    <a id="abandon" onDoubleClick={this.addAbandonHandler} onClick={(e)=>this.onClickHandler(e)}  >Avoid Music</a>
                </div>
                </div>

                <div className="dropdown" id="completed">
                <button className="dropbtn">Completed</button>
                <div className="dropdown-content">
                    <a id="completed" onDoubleClick={this.addCompletedHandler} onClick={(e)=>this.onClickHandler(e)}  >Learnt ReactJs</a>
                    <a id="completed" onDoubleClick={this.addCompletedHandler} onClick={(e)=>this.onClickHandler(e)}  >Finished Project</a>
                    <a id="completed" onDoubleClick={this.addCompletedHandler} onClick={(e)=>this.onClickHandler(e)}  >Learnt NodeJs</a>
                </div>
                </div>

                <div className="dropdown" id="inprogress">
                <button className="dropbtn">Inprogress</button>
                <div className="dropdown-content">
                    <a id="inprogress" onDoubleClick={this.addInprogressHandler} onClick={(e)=>this.onClickHandler(e)}  >Learning angularJS</a>
                    <a id="inprogress" onDoubleClick={this.addInprogressHandler} onClick={(e)=>this.onClickHandler(e)}  >Making Food App</a>
                    <a id="inprogress" onDoubleClick={this.addInprogressHandler} onClick={(e)=>this.onClickHandler(e)}  >Learning Guitar</a>
                </div>
                </div>

                <h5 className="instructions">
                    <div className="first">
                    *Double Click On Every Browsing Options To Add In Respective Task Section
                    </div>
                    <div className="second">
                    **To View Your Selected Tasks Go to Profile Page(it'll be empty if not selected any)
                    </div>
                </h5>

            </div>
        );
    }
}
 
export default Home;