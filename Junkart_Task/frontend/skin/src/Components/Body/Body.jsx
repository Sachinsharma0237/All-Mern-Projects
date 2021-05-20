import React, { Component } from 'react';
import "./Body.css"
import axios from "axios";

class Body extends Component {
    state = { 
            name:"", 
            email:"", 
            age:"", 
            cheeks:"", 
            tZone:"", 
            skinConcerns:"", 
            allergic:"", 
            randomIssues:[],
            userInput:""
     }

    onInputHandler = (e)=>{
        let id = e.target.id;
        let value = e.target.value;
        console.log(value);
        this.setState({
            userInput:value
        })
    }
     
    onChangeHandler = (e)=>{
        let id = e.target.id;
        let value = e.target.value;
        this.setState({
            [id]:value
        })
    }

    onCheckHandler = (e)=>{
        let id = e.target.id;
        this.setState({
           randomIssues:[...this.state.randomIssues , id]
        })
    }

    onAllergicHandler = (e)=>{
        let id = e.target.id;
        this.setState({
            allergic:id
        })
    }
    onAgeHandler = (e)=>{
        let id = e.target.id;
        this.setState({
            age:id
        })
    }
    onCheeksHandler = (e)=>{
        let id = e.target.id;
        this.setState({
            cheeks:id
        })
    }
    onTZoneHandler = (e)=>{
        let id = e.target.id;
        this.setState({
            tZone:id
        })
    }
    onConcernHandler = (e)=>{
        let id = e.target.id;
        this.setState({
            skinConcerns:id
        })
    }

    addUserHandler = async() =>{

        const user = {
            name: this.state.name,
            email: this.state.email,
            age: this.state.age,
            cheeks:this.state.cheeks,
            tZone:this.state.tZone,
            skinConcerns:this.state.skinConcerns,
            allergic:this.state.allergic,
            randomIssues: this.state.randomIssues,
            userInput: this.state.userInput

        }
        console.log(user.name);
        console.log(user.email);
        await axios.post("/api/user", {"name":user.name, "email":user.email, "age":user.age, "cheeks":user.cheeks,"tZone":user.tZone, "skinConcerns":user.skinConcerns,  "randomIssues":user.randomIssues, "allergic":user.allergic, "userInput":user.userInput }).then( (obj)=>{
            console.log(obj);
        }) 
        this.props.updateParent({
            name:this.state.name, 
            email:this.state.email, 
            age:this.state.age, 
            cheeks:this.state.cheeks, 
            tZone:this.state.tZone, 
            skinConcerns:this.state.skinConcerns, 
            allergic:this.state.allergic, 
            randomIssues:this.state.randomIssues,
            userInput:this.state.userInput,
         })
    }

    render() { 
        return ( 
            <div className="body">
                <div className="user-details">
                    <div className="name">What's your Name?
                        <input type="text" value={this.state.name} id="name" onChange={ (e)=>{this.onChangeHandler(e)} } placeholder="Name"/>
                    </div>
                    <div className="user-problem">
                        <input type="text" name="" id="userInput" value={this.state.userInput} onChange={(e)=>{this.onChangeHandler(e)}} />
                    </div>
                    <div className="age">What is your Age?
                    <div className="buttons">
                    <button className="btn btn-outline-primary" onClick={ (e)=>{this.onAgeHandler(e)} } id="< 20" >less than 20</button>
                    <button className="btn btn-outline-primary" onClick={ (e)=>{this.onAgeHandler(e)} } id="20-30" >20-30</button>
                    <button className="btn btn-outline-primary" onClick={ (e)=>{this.onAgeHandler(e)} } id="31-40" >31-40</button>
                    <button className="btn btn-outline-primary" onClick={ (e)=>{this.onAgeHandler(e)} } id="41-50" >41-50</button>
                    <button className="btn btn-outline-primary" onClick={ (e)=>{this.onAgeHandler(e)} } id="50+" >50+</button>
                    </div>
                    </div>
                </div>
                <div className="skin-feel">How does your skin feel in the morning? 
                    <ul className="cheeks">Cheeks
                    <button  className="btn btn-outline-primary" onClick={ (e)=>{this.onCheeksHandler(e)} } id="dry">Dry</button>
                    <button  className="btn btn-outline-primary" onClick={ (e)=>{this.onCheeksHandler(e)} } id="normal">Normal</button>
                    <button  className="btn btn-outline-primary" onClick={ (e)=>{this.onCheeksHandler(e)} } id="oily">Oily</button>
                    </ul>
                    <ul className="t-zone">T zone
                    <button  className="btn btn-outline-primary" onClick={ (e)=>{this.onTZoneHandler(e)} } id="dry">Dry</button>
                    <button  className="btn btn-outline-primary" onClick={ (e)=>{this.onTZoneHandler(e)} } id="normal">Normal</button>
                    <button  className="btn btn-outline-primary" onClick={ (e)=>{this.onTZoneHandler(e)} } id="oily">Oily</button>
                    </ul>
                </div>
                <div className="skin-concern">What are your top skin concerns?
                <ul className="concern-options">select upto 2
                    <button className="btn btn-outline-primary" onClick={ (e)=>{this.onConcernHandler(e)} } id="Acne"  >Acne</button>
                    <button className="btn btn-outline-primary" onClick={ (e)=>{this.onConcernHandler(e)} } id="Redness"  >Redness</button>
                    <button className="btn btn-outline-primary" onClick={ (e)=>{this.onConcernHandler(e)} } id="Pigmentation" >Pigmentation</button>
                    <button className="btn btn-outline-primary" onClick={ (e)=>{this.onConcernHandler(e)} } id="Wrinkles / Age Spots" >Wrinkles / Age Spots</button>
                    <button className="btn btn-outline-primary" onClick={ (e)=>{this.onConcernHandler(e)} } id="Blackheads / Whiteheads"  >Blackheads / Whiteheads</button>
                    <button className="btn btn-outline-primary" onClick={ (e)=>{this.onConcernHandler(e)} } id="Others" >Others, Enter here</button>
                </ul>
                </div>
                <div className="allergic">Are you allergic to any of these ingredients?
                <div className="buttons">
                <button className="btn btn-outline-primary" id="Vitamin C" onClick={ (e)=>{this.onAllergicHandler(e)} } >Vitamin C</button>
                <button className="btn btn-outline-primary" id="Salicyclic acid" onClick={ (e)=>{this.onAllergicHandler(e)} } >Salicylic Acid</button>
                <button className="btn btn-outline-primary" id="Retinnol" onClick={ (e)=>{this.onAllergicHandler(e)} } >Retinnol</button>
                <button className="btn btn-outline-primary" id="Not Sure" onClick={ (e)=>{this.onAllergicHandler(e)} } >Not Sure</button>
                </div>
                </div>
                <ul className="random-issues">Select all that apply to you
                    <div className="random-options">
                    <div className="lack-of-sleep" >Lack of Sleep
                        <input type="checkbox" id="lack-of-sleep" name="" onChange={ (e)=>{this.onCheckHandler(e)} } />
                    </div>
                    <div className="lack-of-water">Lack of water intake
                        <input type="checkbox" id="lack-of-water" name="" onChange={ (e)=>{this.onCheckHandler(e)} }  />
                    </div>
                    <div className="stressed">Stressed
                        <input type="checkbox" id="stressed" name="" onChange={ (e)=>{this.onCheckHandler(e)} }  />
                    </div>
                    <div className="pregnant">Pregnant
                        <input type="checkbox" id="pregnant" name="" onChange={ (e)=>{this.onCheckHandler(e)} }  />
                    </div>
                    <div className="high-ac">High AC exposure
                        <input type="checkbox" id="high-ac" name="" onChange={ (e)=>{this.onCheckHandler(e)} }  />
                    </div>
                    <div className="senstitive-skin">Senstitive skin
                        <input type="checkbox" id="senstitive-skin" name="" onChange={ (e)=>{this.onCheckHandler(e)} }  />
                    </div>
                    </div>
                </ul>
                <div className="email">Where can we email your detailed skin analysis?
                <div className="email-input">(No spam, we feel you!)
                <input type="text"  id="email" placeholder="Email" onChange={ (e)=>{this.onChangeHandler(e)} } />
                <button className="btn btn-primary btn-lg" id="routine" onClick={this.addUserHandler} >SEE YOUR ROUTINE</button>
                
                </div>
                </div>
            </div>
         );
    }
}
 
export default Body;