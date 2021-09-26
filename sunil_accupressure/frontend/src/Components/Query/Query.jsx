import React, { Component } from "react";
import './Query.css';


class Query extends Component {
    state = {
        fullName:"",
        email:"",
        dob:"",
        gender:"",
        in_state:"",
        errors:{}
    }


    onChangeHandler = (e) =>{
        let type = e.target.id;
        let value = e.target.value;
        this.setState({
            [type]: value
        })
    }

    formValidation=()=>{
        let { fullName, email, dob, gender } = this.state;
        let isValid = true;
        const errors = {};    
        if(fullName.trim().length < 5){
            errors.fullNameLength = "Fullname must be greater than 5"
            isValid = false;
        }
        if(fullName.includes("$") || fullName.includes("#") || fullName.includes("&")){
            errors.fullName$ = "fullname must not contain special characters"
            isValid = false;
        }
        if(dob.trim().length < 9){
            errors.dobLength = "Please Select date of birth"
            isValid = false;
        }

        if(gender.length < 5 ){
            errors.genderLength = "Please Select Your Gender"
            isValid = false;
        }

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email.match(mailformat)){
            errors.mailFormat = "Email Format is Invalid"
            isValid = false;
        }
        this.setState({errors});
        return isValid;
    }

    onSubmit=(e)=>{
        e.preventDefault();
        let { fullName,
            email,
            dob,
            gender,
            in_state,
            errors } = this.state;
        const isValid = this.formValidation();
        if(isValid){
            this.props.register(fullName, email, dob, gender, in_state);
        }
    }

    toggleChange = () => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
      }


    render() { 
        let { fullName,
              email,
              dob,
              gender,
              in_state,
              errors,
              phone,
              query } = this.state;

        return(
            <form onSubmit={this.onSubmit}>
            <div className="container">
                <h1 style={{textAlign:"center", color:"green"}}>Query Form</h1>                
                <hr></hr>

                <label htmlFor="fullName"><b>Full Name*</b></label>
                <input type="text" id="fullName" placeholder="Full Name*"
                value={fullName} required
                onChange={ (e) => this.onChangeHandler(e) } />
            
                <label htmlFor=""><b>Email</b></label>
                <input type="email" id="email" className="form-control" placeholder="Email"
                value={email}
                onChange={ (e) => this.onChangeHandler(e) } />

                <label htmlFor=""><b>Phone No.*</b></label>
                <input type="tel" id="phone" className="form-control" placeholder="phone no"
                value={phone} required
                onChange={ (e) => this.onChangeHandler(e) } />
                
                <br/>
                <label htmlFor="dob"><b>Select Date of Birth*</b></label>
                <input type="date" id="dob" className="form-control" placeholder="Select Date of Birth*"
                value={dob} required
                onChange={ (e) => this.onChangeHandler(e) }/>

                <br/>
                <label htmlFor=""><b>Select Gender*</b></label>
                <br/>
                <select value={gender} id="gender" onChange={ (e) => this.onChangeHandler(e) } required>
                    <option value>--Select Gender*--</option>
                    <option value="male ">Male</option>
                    <option value="female">Female</option>
                    <option value="transgender">Transgender</option>
                    <option value="preferNotToAnswer">Prefer Not to Answer</option>
                </select>

                <hr/>
                <label htmlFor=""><b>Select State</b></label>
                <br/>

                <select value={in_state} id="in_state" onChange={ (e) => this.onChangeHandler(e) } >
                    <option value>--Select State--</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Orissa">Orissa</option>
                    <option value="Pondicherry">Pondicherry</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttaranchal">Uttaranchal</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="West Bengal">West Bengal</option> 
                </select>

                <hr/>
                <label htmlFor="query"><b>Please write your query here* </b></label>
                <br />
                <textarea style={{padding:"5px"}} rows = "5" cols = "50" name = "description" placeholder="your query"
                    onChange={ (e) => this.onChangeHandler(e) } id="query"
                    value={query}
                />

                <button type="submit" className="registerbtn" >Send your query to us !</button>
                {Object.keys(errors).map((key)=>{
                    return <div style={{color: "red"}} key={key}>{errors[key]}</div>
                })}
            </div>
            </form>
        );     

    }
}
 

export default Query;