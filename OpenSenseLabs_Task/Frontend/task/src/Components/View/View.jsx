import React, { Component } from 'react';
import './View.css';

class View extends Component {
    state = { 

     }
    render() { 
        return ( <div className="view">
            <button onClick={this.props.addDataHandler} className="btn btn-primary">ADD DATA TO FIREBASE</button>
            <button onClick={this.props.viewAllDataHandler} className="btn btn-warning">VIEW ADDED DATA OF FIREBASE</button>
            <div className="firebaseData">
                {this.props.flag ? 
                        <ul className="profile" >
                        { this.props.allData.todayTasksArray ? 
                            <div className="todayTask"> Todays's Task
                            {this.props.allData.todayTasksArray.map( todayTask=>{
                             return  <ul>
                                    <li key={"785" + todayTask.id} >{todayTask.todayTasks}</li>
                                </ul>
                            })}
                            </div>
                        :
                        <div className="no-task">Section of Firebase is Empty</div> }
                        { this.props.allData.pendingArray ? 
                            <div className="pendingTask">Pending Task
                            {this.props.allData.pendingArray.map( pending=>{
                             return  <ul>
                                    <li key={"8955" +pending.id} >{pending.pending}</li>
                                </ul>
                            })}
                            </div>
                        :
                        <div className="no-task">Section of Firebase is Empty</div> }
                        { this.props.allData.abandonArray ? 
                            <div className="abandonTask">Abandon Task
                            {this.props.allData.abandonArray.map( abandon=>{
                             return  <ul>
                                    <li key={abandon.id + "78542"} >{abandon.abandon}</li>
                                </ul>
                            })}
                            </div>
                        :
                        <div className="no-task">Section of Firebase is Empty</div> }
                        { this.props.allData.completedArray ? 
                            <div className="completedTask">Completed Task
                            {this.props.allData.completedArray.map( completed=>{
                             return  <ul>
                                    <li key={completed.id + "78530"} >{completed.completed}</li>
                                </ul>
                            })}
                            </div>
                        :
                        <div className="no-task">Section of Firebase is Empty</div> }
                        { this.props.allData.inprogressArray ? 
                            <div className="inprogressTask">Inprogress Task
                            {this.props.allData.inprogressArray.map( inprogress=>{
                             return  <ul>
                                    <li key={ "85743" + inprogress.id} >{inprogress.inprogress}</li>
                                </ul>
                            })}
                            </div>
                        :
                        <div className="no-task">Section of Firebase is Empty</div> }
                    </ul>
                : 
                <h4>Click Button To View Data</h4> }
           </div> 
        </div> );
    }
}
 
export default View;