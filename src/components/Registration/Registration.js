import React, {Component} from 'react';
import { withRouter,Link} from 'react-router-dom';
import CommonServices from "../../Services/commonService"
import {connect} from 'react-redux'

import Moment from 'moment'

 class Registration extends Component {
  debugger
  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
      emailError:"",
      passwordError:"",
      validFormError:"",

      //additional variables for registration form
      agreementCheckBox:false,
      gendermalechecked:false,
      genderfemalecheced :false,
      registerEmail:"",
      registerPassword:"",
      firstName:"",
      middleName:"",
      lastName:"",
      
      religion:"Religion",
      phone:"",
      gender:"",
      profileFor:"Select",
      dob:"",

      //additional Error variables
      registerEmailError:"",
      registerPasswordError:"",
      firstNameError:"",
      middleNameError:"",
      lastNameError:"",
      religionError:"",
      phoneError:"",
      genderError:"* Plese choose gender",
      profileForError:"",
      dobError:"",
      validRegFormError:"",
    
      Validage : Moment().subtract(18, 'years').format("YYYY-MM-DD"),
      //invali field higjlight
      registerEmailErrorglow:"",
      registerPasswordErrorglow:"",
      firstNameErrorglow:"",
      middleNameErrorglow:"",
      lastNameErrorglow:"",
      religionErrorglow:"",
      phoneErrorglow:"",
      genderErrorglow:"",
      profileForErrorglow:"",
      dobErrorglow:"",
      validRegFormErrorglow:"",

      //genderinvalid
      genderErrorvisibility:"hidden"

    }
    this.serviceObj = new CommonServices();
  }
  
  

  componentDidMount() {
   
  }


  componentDidUpdate() {
    this.debugger

  }

//email validation or setting invalid message 
  emailIDEnter = (e)=>{
    debugger
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     
    if(re.test(e.target.value) == true)
    {
     
        this.setState({
          username:e.target.value,
          emailError:""
        })
    
    }
    else{
      this.setState({
        emailError:"Enter valid email."
      })
    }

   
  }
  passwordEnter = (e)=>{
    if(e.target.value.length >2)
    {
      this.setState({
        password:e.target.value,
        passwordError:""
      })
    }
    else{
      this.setState({
        passwordError:"Enter correct password."
      })
    }
    
    
  }
  
  checkboxClick =(e)=> {
    var checked = e.target.checked;
    if (checked == true){
      this.setState({
        agreementCheck:true
      })
       
    }
    else{
      this.setState({
        agreementCheck:false
      }) 
      
    }
 
  }

  continue_Btn=()=>{
    this.props.history.push({
        pathname:"/Registration",
      });
  }
  
  //json for submit button
  onSubmitRegData =(e)=>{
    debugger
    if(this.registerValidation()){
      let regdata = {
        "firstName":this.state.firstName,
        "middlename":this.state.middleName,
        "lastname":this.state.lastName,
        "emailid":this.state.registerEmail,
        "mobileno":this.state.phone,
        "password":this.state.registerPassword,
        "religion":this.state.religion,
        "gender":this.state.gender,
        "dateofbirth":this.state.dob,
        "profilefor":this.state.profileFor
        
     
    }
    this.serviceObj.submitData_By_Post(regdata,this.registerCallBack,"registeruser");
    }
    else{
    }
  }
  phone_Enter = (e)=>{
    var regexPhone =/^(\+\d{1,3}[- ]?)?\d{10}$/
    if(regexPhone.test(e.target.value))
    {
      this.setState({
        phone:e.target.value,
        phoneError:"",
        phoneErrorglow:""
      })
    }
    else{
      this.setState({
        phoneError:"Enter correct phone.",
        phoneErrorglow:"0 0 5px #e14e4e"
      })
    }
  }

  registerEmail_Enter = (e)=>{
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(e.target.value) == true)
    {
     
        this.setState({
          registerEmail:e.target.value,
          registerEmailError:"",
          registerEmailErrorglow:""
        })
    
    }
    else{
      this.setState({
        registerEmailError:"Enter valid email.",
        registerEmailErrorglow:"0 0 5px #e14e4e"
        
      })
      
    }
  }
  
  registerPassword_Enter = (e)=>{
    console.log(e.target.value)
    if(e.target.value.length > 6)
    {
      this.setState({
        registerPassword:e.target.value,
        registerPasswordError:"",
        registerPasswordErrorglow:""
      })
    }
    else{
      this.setState({
        registerPasswordError:"Password lenght must be between 6 - 12",
        registerPasswordErrorglow:"0 0 5px #e14e4e"
      })
    }


  }
  firstName_Enter  = (e)=>{
    
    let re = /^[a-z ,.'-,0-9]+$/i
    let result =re.test(e.target.value)
    if(result && e.target.value.length > 2)
    {
      
      this.setState({
        firstName:e.target.value,
        firstNameError:"",
        firstNameErrorglow:""
      })
    }
    else{
      this.setState({
        firstNameError:"* Please enter first name",
        firstNameErrorglow:"0 0 5px #e14e4e"
      })
    }
    
  }

  middleName_Enter  = (e)=>{
    let re = /^[a-z ,.'-,0-9]+$/i
    let result =re.test(e.target.value)
    if(result && e.target.value.length > 2)
    {
      
      this.setState({
        middleName:e.target.value,
        middleNameError:"",
        middleNameErrorglow:""
      })
    }
    else{
      this.setState({
        middleNameError:"* Please enter middle name",
        middleNameErrorglow:"0 0 5px #e14e4e"
      })
    }
    
  }

  lastName_Enter  = (e)=>{
    
    let re = /^[a-z ,.'-,0-9]+$/i
    let result =re.test(e.target.value)
    if(result && e.target.value.length > 2)
    {
      
      this.setState({
        lastName:e.target.value,
        lastNameError:"",
        lastNameErrorglow:""
      })
    }
    else{
      this.setState({
        lastNameError:"* Please enter last name",
        lastNameErrorglow:"0 0 5px #e14e4e"
      })
    }
    
  }

  religion_Enter =(e)=>{

    
    if(e.target.value != "Religion")
    {
      this.setState({
        religion:e.target.value,
        religionError:"",
        religionErrorglow:""
      })
    }
    else{
      this.setState({
        religionError:"* Please choose a religion.",
        religionErrorglow:"0 0 5px #e14e4e"
      })
    }


  }

  gender_Enter =(e)=>{
    
    if(e.target.value.length > 1)
    {
      if(e.target.value == "Male"){
        this.setState.maleValidage = Moment().subtract(21, 'years').format("YYYY-MM-DD")
      }
      this.setState({
        gender:e.target.value,
        genderError:"",
        genderErrorglow:"",
        genderErrorvisibility:"hidden"
      })
    }
    else{
      this.setState({
        religionError:"* please choose gender.",
        genderErrorglow:"0 0 5px #e14e4e"
      })
    }

  }
  //dynamicgenderset = (e) =>{
  //  
  //  if( e == "Son" || e == "Brother"){
  //    this.setState.gendermalechecked = true
  //
  //  }
  //  else if(e == "Daughter" || e == "Sister"){

  //    this.setState.genderfemalecheced = true

  //  }
  //}
  profileFor_Enter = (e) =>{
    
    if(e.target.value != "Select")
    {
 //     this.dynamicgenderset(e.target.value)
      this.setState({
        profileFor:e.target.value,
        profileForError:"",
        profileForErrorglow:""
      })
    }
    else{
      this.setState({
        profileForError:"* Please choose for whom you are creating the profile.",
        profileForErrorglow:"0 0 5px #e14e4e"
      })
    } 



  }
  //DOB validation
  //famale should br above 18 years
  //male should be above 21 years
  dob_Enter = (e)=>{
    

    debugger
    let femaleValid = Moment().subtract(18, 'years');
    let maleValid = Moment().subtract(21, 'years');

    
    let entered =Moment(e.target.value);
    let gndr = this.state.gender 
    
    if (entered > maleValid && gndr == "Male" ){

      this.setState({
        dobError:"* Male must be 21 years or older"
      })
    }
    else if(entered > femaleValid && gndr == "Female")
    {
      this.setState({
        dobError:"* Female must be 18 years or older "
      })
    }
    else if(gndr == ""){
      this.setState({
        dobError:"* Choose the gender first to enter a valid date of birth"
      })
    }
    else{

      this.setState({
        dob:e.target.value,
        dobError:""
      })
    }    
    
    
  }
  //validate form
  registerValidation=()=>{
    debugger
    if(this.state.registerEmail.length > 0 && this.state.registerPassword.length > 0 && this.state.religionError.length == 0 && this.state.phone.length > 0 && this.state.profileForError == 0 && this.state.firstNameError.length ==0 && this.state.middleNameError.length == 0 && this.state.lastNameError.length ==0 && this.state.dobError.length ==0 && this.state.gender.length != 0)
    {
      return true
    }
    else {
       if(this.state.registerEmail.length === 0){
          
        this.setState({
          registerEmailError:"* Please enter a valid email",
          registerEmailErrorglow:"0 0 5px #e14e4e"
        })
          

       }
       if(this.state.gender.length === 0)
       {
        this.setState({
          genderErrorvisibility:""
          
        })

       }
       if(this.state.registerPassword.length === 0)
       {
        this.setState({
          registerPasswordError:"* Please enter valid password",
          registerPasswordErrorglow:"0 0 5px #e14e4e"

        })
        

       }
       if(this.state.religion === "Religion" )
       {
        this.setState({
          religionError:"* Please choose your religion",
          religionErrorglow:"0 0 5px #e14e4e"

        })
         
       }
       if(this.state.phone.length == 0)
       {
        this.setState({
          phoneError:"* Please enter a valid mobile number.",
          phoneErrorglow:"0 0 5px #e14e4e"

        })

       }
       if(this.state.profileFor == "Select")
       {
        this.setState({
          profileForError:"* Please choose for whom you are creating profile.",
          profileForErrorglow:"0 0 5px #e14e4e"

        })

       } 
       if(this.state.firstName.length == 0)
       {
        this.setState({
          firstNameError:"* Please enter first name.",
          firstNameErrorglow:"0 0 5px #e14e4e"

        })
       }
       
       if(this.state.middleName == 0)
       {
       this.setState({
        middleNameError:"* Plese enter middle name.",
        middleNameErrorglow:"0 0 5px #e14e4e"

      })
     }
       if(this.state.lastName.length ==0 )
       this.setState({
        lastNameError:"* Please enter last name.",
        lastNameErrorglow:"0 0 5px #e14e4e"

      })
       if(this.state.dob.length ==0)
       {
        this.setState({
          dobError:"* Please enter a valid date.",
          dobErrorglow:"0 0 5px #e14e4e"
  
        })
       }
    
    return false
    }
  }
  validation=()=>{
    if(this.state.username.length > 0 && this.state.password.length > 0)
    {
      return true
    }
    else
    {
      return false
    }
  }
   onSubmitData = (e) =>{
      let data = {
        "username" : this.state.username,
       "password" : this.state.password
    }
    debugger;
    if(this.validation())
    {
      this.serviceObj.submitData_By_Post(data,this.callBack,"login");
      this.setState({
        validFormError:""
      })
    }
    else{
     
      this.setState({
        validFormError:"Please fill form."
      })
    }
  }

  callBack = (response)=>{
    debugger
    if(response.message === "success")
     {
      debugger
      alert("Login successfully..."+response.message);
      sessionStorage.setItem("email", response.username);
      this.props.changeName("Logout",response.username,response.user.role);
      if(response.user.role === "user")
      {
      
        this.props.history.push({
          pathname:"/Dashboard",
          data:response.username
        });
      }
      else
      {
        this.props.history.push({
          pathname:"/Admin",
          data:response.username
        });
      }
    }
    else{
      alert("Fill correct data..."+response.message);
    }
   
  }


  registerCallBack = (response)=>{

    debugger
    if(response.message === "New User Registered succssfully")
     {

      debugger
      alert(response.message + " you will be redirected to login page.");
        this.props.history.push({
          pathname:"/Registration",
          data:response.username
        });
    }
    else{
      alert(response.message);
    }
   
  }
  render() {
    console.warn("===Readux=LOGIN=",this.props)
    const {password}= this.state ;
    const isEnabled = password.length >1;
    return (
      <div>
      <div class="w3layouts-banner" id="home">
      <div class="container">
        <div class="logo">
          <h1><a class="cd-logo link link--takiri" href="index.html">Match <span><i class="fa fa-heart" aria-hidden="true"></i>Made in heaven.</span></a></h1>
        </div>
        <div class="clearfix"></div>
        <div class="agileits-register">
          <h3 style={{"text-align":"center"}}> Register NOW!</h3>
          <form action="ProfileFor" method="post">
              
              <div class="w3_modal_body_grid w3_modal_body_grid1">
                <span class="">Profile For:</span>
                <select id="w3_country" style={{"box-shadow":this.state.profileForErrorglow}} onChange={(e)=>this.profileFor_Enter(e)}  class="frm-field required">
                  <option value="Select">Select</option>
                  <option value="Myslef">Myself</option>   
                  <option value="Son">Son</option>   
                  <option value="Daughter">Daughter</option>   
                  <option value="Brother">Brother</option>   
                  <option value="Sister">Sister</option>  
                  <option value="Relative">Relative</option>
                  <option value="Friend">Friend</option>						
                </select>
              </div>
              <div><span className="error_Common">{this.state.profileForError}</span></div>

             
              <div class="w3_modal_body_grid w3_modal_body_grid1">
                
                <span>First Name <sup className="requireStar">*</sup>:</span>
                <input type="text" style={{"box-shadow":this.state.firstNameErrorglow}}name="firstName" placeholder=" " required onChange={(e)=>this.firstName_Enter(e)} maxLength="64" />
                <div>
                
                </div>
              </div>
              <span style={{"visibility":"visible"}} class="error_Common" >{this.state.firstNameError}</span>
              <div class="w3_modal_body_grid w3_modal_body_grid1">
                <span>Middle Name:</span>
                <input type="text" name="middleName"style={{"box-shadow":this.state.middleNameErrorglow}} placeholder=" " required="" onChange={(e)=>this.middleName_Enter(e)} maxLength="64"  />
              </div>
              <div><span className="error_Common">{this.state.middleNameError}</span></div>
              <div class="w3_modal_body_grid w3_modal_body_grid1">
                <span>Last Name:</span>
                <input type="text" name="lastName" placeholder=" " style={{"box-shadow":this.state.lastNameErrorglow}} required="" onChange={(e)=>this.lastName_Enter(e)} maxLength="64" />
              </div>
              <div><span className="error_Common">{this.state.lastNameError}</span></div>
              
              <div class="w3_modal_body_grid w3_modal_body_grid1">
                <span>Gender:</span>
                <div class="w3_gender">
                  <div class="colr">
                    <label class="radio"><input type="radio" name="radio" value="Male"onChange={(e)=>this.gender_Enter(e)}/><i></i>Male</label>
                  </div>
                  <div class="colr">
                    <label class="radio"><input type="radio" name="radio" value = "Female"onChange={(e)=>this.gender_Enter(e)} /><i></i>Female</label>
                  </div>
                  <div class="clearfix"> </div>
                </div>
                
                <div class="clearfix"> </div>
            </div>
            <div><span className="error_Common" style={{"visibility":this.state.genderErrorvisibility}}>{this.state.genderError}</span></div>
              
              <div class="w3_modal_body_grid w3_modal_body_grid1" style={{"box-shadow":this.state.genderErrorglow}}>
                <span>Date Of Birth:</span>
                
                
                <input name="Text" margin="10px" type="date" style={{"box-shadow":this.state.genderErrorglow}}  required="" placeholder dateFormat="DD/MM/YYYY" max={this.state.Validage} onChange={(e)=>this.dob_Enter(e)} />
                

              </div>
              <div><span className="error_Common">{this.state.dobError}</span></div>
              
              <div class="w3_modal_body_grid w3_modal_body_grid1">
                <span>religion:</span>
                <select id="w3_country1" style={{"box-shadow":this.state.religionErrorglow}} onChange={(e)=>this.religion_Enter(e)} class="frm-field required"> 
                  <option value="Religion">Select Religion</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Hindu">Hindu</option>    
                  <option value="Christian">Christian</option>   
                  <option value="Sikh">Sikh</option>   
                  <option value="Jain">Jain</option>   
                  <option value="Buddhist">Buddhist</option>
                  <option value="No Religious Brlief">No Religious Belief</option>   						
                </select>
              </div>
              <div><span className="error_Common">{this.state.religionError}</span></div>
              
              <div class="w3_modal_body_grid w3_modal_body_grid1"  data-validate="Valid email is required: ex@abc.xyz">
              <span>Mobile No:</span>
              <input type="tel" name="Mobile" placeholder="1234567890" style={{"box-shadow":this.state.phoneErrorglow}} pattern="[0-9]{10}" required onChange={(e)=>this.phone_Enter(e)} maxLength="10"/>
              
              
              </div>
              <div><span className="error_Common">{this.state.phoneError}</span></div>

              
              
              <div class="w3_modal_body_grid w3_modal_body_grid1">
                <span>Email:</span>
                <input type="text" required name="Email" placeholder="abc@xyz.com" style={{"box-shadow":this.state.registerEmailErrorglow}} maxLength="34" required="" onChange={(e)=>this.registerEmail_Enter(e)} />
                 
              </div>
              <div><span className="error_Common">{this.state.registerEmailError}</span></div>
              <div >
             
              </div>

              
              <div class="w3_modal_body_grid w3_modal_body_grid1">
                <span>Password:</span>
                <input type="password" name="Password" placeholder=" " maxLength="12" style={{"box-shadow":this.state.registerPasswordErrorglow}} onChange={(e)=>this.registerPassword_Enter(e)}/>
              </div>
              <div><span className="error_Common">{this.state.registerPasswordError}</span></div>
              <div class="w3-agree" >
                <label class="agileits-agree"> <input type="checkbox" id="c1" name="cc"  defaultChecked={this.props.defaultChecked} onChange={(e)=>this.checkboxClick(e)}/>I have read &amp; agree to the <a href="terms.html">Terms and Conditions</a></label>
              </div>
              
              <div class="button">
              <input type="button" class="btn btn-primary btn-md btn-block"value="Register me" disabled={!this.state.agreementCheck} onClick={(e)=>this.onSubmitRegData(e)}/>
              </div>
              
              
              <div class="clearfix"></div>
              <p class="w3ls-login">Already a member? <a type="button"  data-toggle="modal" onClick={(e)=>this.continue_Btn(e)} >Login</a></p>
            </form>
          </div>
        </div>
			</div>
	</div>
    )
  }
}
const mapStateToProps = (state) =>
{
    return{
      "Logout":state.Menu_Render,
      "Email":state.Email,
      "Role":state.Role
    }  
}
const mapDispatchToProps=(dispatch)=>{
  return{
    changeName :(Logout,Email,Role)=>{dispatch({ type:"CHANGE_MENU",  payload:{"Logout":Logout,"Email":Email,"Role":Role} })}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Registration);