import React, { Component } from 'react';
import './Profile.css'

class Profile extends Component {
    state = {  }
    componentDidMount(){
        console.log(this.props);
    }
    render() { 
        return ( <div className="profile" >
                { this.props.todayTasksArray[0] ? 
                    <div className="todayTask"> Todays's Task
                    {this.props.todayTasksArray.map( todayTask=>{
                     return  <ul>
                            <li key={"785" + todayTask.id} >{todayTask.todayTasks}</li>
                        </ul>
                    })}
                    </div>
                :
                <div className="no-task">No Task Added</div> }
                { this.props.pendingArray[0] ? 
                    <div className="pendingTask">Pending Task
                    {this.props.pendingArray.map( pending=>{
                     return  <ul>
                            <li key={"8955" +pending.id} >{pending.pending}</li>
                        </ul>
                    })}
                    </div>
                :
                <div className="no-task">No Task Added</div> }
                { this.props.abandonArray[0] ? 
                    <div className="abandonTask">Abandon Task
                    {this.props.abandonArray.map( abandon=>{
                     return  <ul>
                            <li key={abandon.id + "78542"} >{abandon.abandon}</li>
                        </ul>
                    })}
                    </div>
                :
                <div className="no-task">No Task Added</div> }
                { this.props.completedArray[0] ? 
                    <div className="completedTask">Completed Task
                    {this.props.completedArray.map( completed=>{
                     return  <ul>
                            <li key={completed.id + "78530"} >{completed.completed}</li>
                        </ul>
                    })}
                    </div>
                :
                <div className="no-task">No Task Added</div> }
                { this.props.inprogressArray[0] ? 
                    <div className="inprogressTask">Inprogress Task
                    {this.props.inprogressArray.map( inprogress=>{
                     return  <ul>
                            <li key={ "85743" + inprogress.id} >{inprogress.inprogress}</li>
                        </ul>
                    })}
                    </div>
                :
                <div className="no-task">No Task Added</div> }

        </div> );
    }
}
 
export default Profile;