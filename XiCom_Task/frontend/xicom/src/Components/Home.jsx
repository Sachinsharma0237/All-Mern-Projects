import React, { Component } from 'react';
import './Home.css'
import axios from 'axios'

class Home extends Component {
    state = { 
        name:"",
        description:"",
        startDate:"",
        endDate:"",
        organizer:"",
        tickets:[],
        id:"",
        ticket:"",
        price:""
     }
     addUserHandler = (e)=>{
        this.setState({
            tickets:[...this.props.myTicket]
        }) 
        console.log(this.props.myTicket);
        let data = [];
        for(let i = 0; i < this.props.myTicket.length; i++){

            let myValue = {
                id: this.props.myTicket[i].id,
                ticketNo: "0000" + this.props.myTicket[i].id,
                price: this.props.myTicket[i].todo
            }
            data.push(myValue);
        }
        let { name, description, startDate, endDate, organizer} = this.state;
        axios.post("/api/user", {"name":name, "description":description, "startDate":startDate, "endDate":endDate, "organizer":organizer, "tickets":data}).then( obj=>{
            console.log(obj)
            
        })
     }
     onChangeHandler = (e)=>{
        let id = e.target.id;
        let value = e.target.value;
        this.setState({
            [id]:value
        })
     }

    componentDidMount(){

    }

    render() { 
        let { name, description, startDate, endDate, organizer } = this.state;
        return (  <div className="home">
            <div className="input-component">
                <div className="user-details">
                <div className="event-name">
                    <h2>Event Name</h2>
                    <input type="text" name="" id="name" value={name} onChange={ (e)=>{this.onChangeHandler(e)} }  />
                </div>
                <div className="event-description">
                    <h2>Event Description</h2>
                    <input type="text" name="" id="description" value={description} onChange={ (e)=>{this.onChangeHandler(e)} }  />
                </div>
                <div className="start-date">
                    <h2>Start Date</h2>
                    <input type="text" name="" id="startDate" placeholder="yyyy-mm-dd" value={startDate} onChange={ (e)=>{this.onChangeHandler(e)} }  />
                </div>
                <div className="end-date">
                    <h2>End Date</h2>
                    <input type="text" name="" id="endDate" placeholder="yyyy-mm-dd" value={endDate} onChange={ (e)=>{this.onChangeHandler(e)} }  />
                </div>
                <div className="organizer">
                    <h2>Organizer</h2>
                    <input type="text" name="" id="organizer" value={organizer} onChange={ (e)=>{this.onChangeHandler(e)} }  />
                </div>
                <div className="tickets">
                    <button className="button" onClick={this.addUserHandler} >Add New Tickets</button>
                </div>

                </div>
            </div>
        </div> );
    }
}
 
export default Home;