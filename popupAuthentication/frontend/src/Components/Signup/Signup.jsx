import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './Signup.css';
Modal.setAppElement("#root");

class Signup extends Component {
    state = {
        fullName:"",
        email:"",
        password:"",
        dob:"",
        gender:"",
        occupation:"",
        in_state:"",
        city:"",
        errors:{},
        isChecked: false,
        modalIsOpen : true
    }

    onChangeHandler = (e) =>{
        let type = e.target.id;
        let value = e.target.value;
        this.setState({
            [type]: value
        })
    }

    formValidation=()=>{
        let { fullName,email, password, dob, gender, occupation, in_state, city, isChecked } = this.state;
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
        if(password.trim().length < 7){
            errors.fullNameLength = "password length must be greater than 7"
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
        
        if( !isChecked ){
            errors.checkboxError = "Please Check the Checkbox"
            isValid = false;
        }

        this.setState({errors});
        return isValid;
    }

    onSubmit=(e)=>{
        e.preventDefault();
        let { fullName,
            email,
            password,
            dob,
            gender,
            occupation,
            in_state,
            city,
            errors } = this.state;
        const isValid = this.formValidation();
        if(isValid){
            this.props.register(fullName, email, password, dob, gender, occupation, in_state, city);
        }
    }

    toggleChange = () => {
        this.setState({
          isChecked: !this.state.isChecked,
        });
    }

    setModalState=()=>{
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    }

    render() { 
        let { fullName,
              email,
              password,
              dob,
              gender,
              occupation,
              in_state,
              city,
              errors,
              modalIsOpen } = this.state;

        return(
            <div className="signup_component">
            {/* <button onClick={this.setModalState} >Login/Signup</button> */}
            <Modal className="signupmodal" isOpen={modalIsOpen} >

            <form onSubmit={this.onSubmit}>
            <div className="signupcontainer">
                <div className="headingSignup" style={{textAlign:"center", color:"green"}}>Sign Up</div>                
                <div className="closesignup" onClick={this.setModalState}>x</div>

                {/* <label htmlFor="fullName"><b>Full Name*</b></label> */}
                <input type="text" id="fullName" placeholder="Full Name*"
                value={fullName} required
                onChange={ (e) => this.onChangeHandler(e) } />
            
                {/* <label htmlFor=""><b>Email</b></label> */}
                <input type="email" id="email" className="form-control" placeholder="Email"
                value={email}
                onChange={ (e) => this.onChangeHandler(e) } />

                {/* <label htmlFor=""><b>Password*</b></label> */}
                <input type="password" id="password" className="form-control" placeholder="Password*"
                value={password} required
                onChange={ (e) => this.onChangeHandler(e) } />

                <label htmlFor="dob">Select Date of Birth*</label>
                <input type="date" id="dob" className="form-control" placeholder="Select Date of Birth*"
                value={dob} required
                onChange={ (e) => this.onChangeHandler(e) }/>

                {/* <label htmlFor=""><b>Select Gender*</b></label> */}
                <br/>
                <select value={gender} id="gender" onChange={ (e) => this.onChangeHandler(e) } required>
                    <option value>--Select Gender*--</option>
                    <option value="male ">Male</option>
                    <option value="female">Female</option>
                    <option value="transgender">Transgender</option>
                    <option value="preferNotToAnswer">Prefer Not to Answer</option>
                </select>

                {/* <label htmlFor=""><b>Select Occupation</b></label> */}
                <br/>
                <select value={occupation} id="occupation" onChange={ (e) => this.onChangeHandler(e) } >
                    <option value>--Select Occupation--</option>
                    <option value="salaried">Salaried</option>
                    <option value="business_owner">Business Owner</option>
                    <option value="self_employed">Self-employed</option>
                    <option value="student">Student</option>
                    <option value="homemaker">Homemaker</option>
                    <option value="retired">Retired</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="others">Others</option>
                </select>

                {/* <br/> */}
                {/* <label htmlFor=""><b>Select State</b></label> */}
                {/* <br/> */}

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

                {/* <br/> */}
                {/* <label htmlFor=""><b>City</b></label> */}
                {/* <br/> */}
                { this.state.in_state && this.state.in_state != "true"?  
                <input disabled = {false} type="text" id="city" className="form-control" placeholder="City"
                value={city}
                onChange={ (e) => this.onChangeHandler(e) } />
                :
                <input disabled = {true} type="text" id="city" className="form-control" placeholder="City"
                value={city}/>
                }


                <div className="checkbox_list">
                    <input className="checkbox_input" type="checkbox"  name="t-and-c" id="t-and-c" 
                    defaultChecked={this.state.isChecked}
                    onChange={this.toggleChange}/>
                    <label htmlFor="">
                    <label htmlFor="t-and-c">By proceeding, you agree to our 
                    <a href="https://www.amarujala.com/terms-and-conditions" target="_blank">
                    Terms &amp; Conditions</a>. To find out what personal data we collect and how we use it, please visit our 
                    <a href="https://www.amarujala.com/privacy-policy" target="_blank">Privacy Policy</a>. </label>
                    </label>
                </div>

                <div className="checkbox_list">
                    <input className="checkbox_input" type="checkbox"  name="offer-update" id="offer-update"/> 
                    <label htmlFor="offer-update">Keep me up to date on exclusive offers by 
                    Amar Ujala products and services through Email and SMS.</label>
                </div>
                

                <button type="submit" className="registerbtn" >Create Account</button>
                {Object.keys(errors).map((key)=>{
                    return <div style={{color: "red"}} key={key}>{errors[key]}</div>
                })}


                <div className="container signin">
                    <p>Already have an account? <Link style={{color:"green"}} to="/login">login</Link></p>

                </div>


            </div>
            </form>
            </Modal>
            </div>
        );     

    }
}
 
export default Signup;