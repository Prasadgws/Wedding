import React, {Component} from 'react';
import { withRouter,Link} from 'react-router-dom';
import CommonServices from "../../Services/commonService"
import {connect} from 'react-redux'

import Moment from 'moment'
var base64data =[];
 class AdditionalProfileDetails extends Component {
  
  constructor(props) {
    super(props);

    this.state = {

        setHeight:"",
        setMaritalStatus:"",
        setQualification:"",
        setWorksWith:"",
        setWorkAs:"",
        setDiet:"",
        setCity:"",
        setSubCommunity:"",
        setMotherTongue:"",
        setSalary:"",
        getListOfCity_From_Backend:"",
        setBio:"",
        setCollege:"",
        getAdditionalData_From_Backend:"",
        getProfileDetails_From_Backend :"",
        firstName_value:"",
        gender_Value:"",
        onSubmitError:"",
        onSubmitErrorGlow:"",
        middleName_Value:"",
        lastName_Value:"",
        profileFor_Value:"",
        dob_Value:Moment().format('DD-mm-yyyy'),
        religion_Value:"",
        mobile_Value:"",
        email_Value:"",
        profileImg: "https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120",
        getAddProfileDetails:"",
        getHeight:"",
        getMaritalStatus:"",
        getQualification:"",
        getWorksWith:"",
        getWorkAs:"",
        getDiet:"",
        getCity:"",
        getSubCommunity:"",
        getMotherTongue:"",
        getSalary:"",
        getBio:"",
        getCollege:"",
        getImage:""

    }
    this.serviceObj = new CommonServices();
  }
  
  

  componentDidMount() {

   let regdata={
    "emailId": sessionStorage.getItem("emailId")
            }
  this.serviceObj.submitData_By_Post(regdata,this.getProfileCallBack,"GetProfilesOnLoad");
  let regdata1={
    "emailId": sessionStorage.getItem("emailId")
  }
  this.serviceObj.submitData_By_Post(regdata1,this.getAdditionalProfileCallBack,"getProfiles");
  }

  getAdditionalProfileCallBack = (response)=>{
    console.log("mmmmmmmmmmmmmmmmmmmmmmmmmm",response.data)
    if(response.message=="success")
   
    {
      // this.setState({
      //   getAddProfileDetails: response.data,
      //   getHeight:response.data[0].height,
      //   getMaritalStatus:response.data[0].marital_status,
      //   getQualification:response.data[0].highest_qualification,
      //   getCollege:response.data[0].college_name,
      //   getWorksWith:response.data[0].works_with,
      //   getWorkAs:response.data[0].work_as,
      //   getDiet:response.data[0].diet,
      //   getCity:response.data[0].city,
      //   getSubCommunity:response.data[0].sub_community,
      //   getMotherTongue:response.data[0].mother_tounge,
      //   getSalary:response.data[0].annual_income,
      //   getBio:response.data[0].bio
        
        
      // })
     // const data1= response.data[0].profile_picture;
      // const Example = ({ data1 }) => <img src={`data:image/jpeg;base64,${data1}`} />
      // this.setState({
      //   profileImg:Example
      // })
     
    }
  }
  
  getProfileCallBack = (response)=>{
    if(response.message=="success")
    {

    


    console.log("111111111111111111111111111111111111111",response.data);
    
     
      this.setState({
        getProfileDetails_From_Backend :response.data,
        firstName_value:response.data[0].firstName,
        gender_Value:response.data[0].gender,
        middleName_Value:response.data[0].middleName,
        lastName_Value:response.data[0].lastName,
        profileFor_Value:response.data[0].profileFor,
        dob_Value:response.data[0].dateOfBirth,
        religion_Value:response.data[0].religion,
        mobile_Value:response.data[0].mobileNo,
        email_Value:response.data[0].emailId

      })
      var date = Moment(this.state.dob_Value).format('DD-MM-yyyy');
     
      alert(date);
      console.log("-------------Success from user-------------------",this.state.gender_Value);
    }
    else{
      console.log("--------------Error in fetching user data------------------");
    }
     
  }


  componentDidUpdate() {
    this.debugger

  }

  onchange_college = (e) =>{
    this.setState({
        setCollege: e.target.value
    })
  }
  onchange_Height = (e) =>{
      this.setState({
          setHeight: e.target.value
      })

  }

  onchange_Marital_Status = (e) =>{
      this.setState({
          setMaritalStatus: e.target.value
      })

  }
  onchange_qualification = (e) =>
  {
    this.setState({
        setQualification:e.target.value
    })
  }

  onchange_worksWith = (e) =>{
      this.setState({
        setWorksWith:e.target.value
      })
        
  }

  onchange_workAs = (e) =>
  {
    this.setState({
        setWorkAs:e.target.value
    })
  }

  onchange_Diet = (e) =>{
    this.setState({
       setDiet:e.target.value 
    })

  }

  onchange_state =(e) =>
  {
      alert(e.target.value);
    let regdata={
        "state_id": e.target.value
  }
 this.serviceObj.submitData_By_Post(regdata,this.getCityCallBack,"getCity");

  }
  getCityCallBack = (response)=>{

   
    console.log("111111111111111111111111111111111111111",response.data);
    
     
      this.setState({
        getListOfCity_From_Backend :response.data
      })
     
  }

  onchange_city = (e) =>{
    this.setState({
        setCity:e.target.value
    })
  }

  onchange_subCommunity =(e) =>
  {
    this.setState({
        setSubCommunity:e.target.value
        
    })
  }

  onchange_motherTongue = (e) =>{
    this.setState({
        setMotherTongue:e.target.value
    })
  }

  onchange_Salary = (e) =>{
    this.setState({
        setSalary:e.target.value
        
    })
  }

  onchange_Bio = (e) =>{
    this.setState({
        setBio:e.target.value
        
    })
  }
  

  onSubmitAdditionalData =()=>{
    if(this.state.height =="" && this.state.setMaritalStatus=="" && this.state.setQualification=="" && this.state.setCollege=="" && this.state.setWorksWith =="" && this.state.setCity =="" && this.state.setSubCommunity=="" && this.setState.setMotherTongue=="" && this.setState.setSalary=="")
    {
      this.setState({
        onSubmitError:"* All Fields are Mandestory, Please select all fields",
        onSubmitErrorGlow:"0 0 5px #e14e4e"
      })
    }
    else{

    
    let regdata={
        "id": sessionStorage.getItem("user_id_unique"),
        "emailId": sessionStorage.getItem("emailId"),
        "height": this.state.setHeight,
        "marital_status": this.state.setMaritalStatus,
        "highest_qualification": this.state.setQualification,
        "college_name": this.state.setCollege,
        "works_with": this.state.setWorksWith,
        "work_as": this.state.setWorkAs,
        "city": this.state.setCity,
        "diet": this.state.setDiet,
        "sub_community": this.state.setSubCommunity,
        "mother_tounge": this.state.setMotherTongue,
        "annual_income": this.state.setSalary,
        "show_profile": "",
        "profile_picture": base64data,
        "bio": this.state.setBio
    }
    console.log("jsonData===========",regdata)
    this.serviceObj.submitData_By_Post(regdata,this.getAddDetailsCallBack,"AddDetails");
  }
}
  getAddDetailsCallBack = (response)=>{

    console.log("111111111111111111111111111111111111111",response.message);
    
      alert(response.message);
      this.setState({
        getAdditionalData_From_Backend :response.message
      })
     
  }
   onChangeImage =(e) =>{
    this.setState({
      profileImg:URL.createObjectURL(e.target.files[0])
     })
     console.log(this.state.profileImg);
   const reader =new FileReader();
   reader.onload =() =>{
     if(reader.readyState==2){
       this.setState({selectFile: reader.result})
     }
   }
   console.log(e.target.files[0])
   reader.readAsDataURL(e.target.files[0])
   reader.onload = function()
   {
      base64data= reader.result
     console.log("---------------",base64data);
   }
  
   this.setState({
    profileImg:URL.createObjectURL(e.target.files[0])
   })
  
}

fileUploadHandler =() =>{
 
}

  render() {

    const {profileImg} =this.state
    const heights = [
        { name: "4ft - 121 cm", value: "121 cm" },
        { name: "4ft 1in - 124cm", value: "124cm" },
        { name: "4ft 2in - 127cm", value: "127cm" },
        { name: "4ft 3in - 127cm", value: "129cm" },
      ];
      const maritalStatus = [
        { name: "Single", value: "Single" },
        { name: "Divorced", value: "Divorced" },
        { name: "Widowed", value: "Widowed" },
        { name: "Separated", value: "Separated" },
      ];
  
      const qualifications = [
        {
          name: "Any Bachelors in Engineering / Computers",
          value: "svAny Bachelors in Engineering / Computers",
        },
        {
          name: "Any Bachelors in Arts / Science / Commerce",
          value: "Any Bachelors in Arts / Science / Commerce",
        },
        { name: "Any Masters in Management", value: "Any Masters in Management" },
      ];
  
      const worksWith = [
        { name: "Government/Public Sector", value: "Government/Public Sector" },
        { name: "Defense/Civil Services", value: "Defense/Civil Services" },
        { name: "Business/Self Employed", value: "Business/Self Employed" },
        { name: "Private Company", value: "Private Company" },
        { name: "Not Working", value: "Not Working" },
      ];
      const worksAs = [
        { name: "Aounting/Banking/Finance", value: "Aounting/Banking/Finance" },
        { name: "Banking professionl", value: "Banking professionl" },
        { name: "Finance Professional", value: "Finance Professional" },
      ];

      const stateRegional =[
        {name:"Andhra Pradesh",value:1},
          {name:"Arunachal Pradesh",value:2},
          {name:"Assam",value:3},
          {name:"Bihar",value:4},
          {name:"Chhattisgarh",value:5},
          {name:"Goa",value:6},
          {name:"Gujarat",value:7},
          {name:"Haryana",value:8},
          {name:"Himachal Pradesh",value:9},
          {name:"Jharkhand",value:10},
          {name:"Karnataka",value:11},
          {name:"Kerala",value:12},
          {name:"Madhya Pradesh",value:13},
          {name:"Maharashtra",value:14},
          {name:"Manipur",value:15},
          {name:"Meghalaya",value:16},
          {name:"Mizoram",value:17},
          {name:"Nagaland",value:18},
          {name:"Odisha",value:19},
          {name:"Punjab",value:20},
          {name:"Rajasthan",value:21},
          {name:"Sikkim",value:22},
          {name:"Tamil Nadu",value:23},
          {name:"Telangana",value:24},
          {name:"Tripura",value:25},
          {name:"Uttarakhand",value:26},
          {name:"Uttar Pradesh",value:27},
          
          
      ];
  
 const subCommunities = [
     {name: 'Kunabi', value: 'Kunabi'},
     {name: 'Maratha', value: 'Maratha'},             
     ];
     const motherToung = [
       {name: 'Marathi', value: 'Marathi'},
       {name: 'Hindi', value: 'Hindi'},
       {name: 'Gujrati', value: 'Gujrati'}
       ];
       const diet = [
        {name: 'Veg', value: 'Veg'},
        {name: 'Ocasonally Non-Veg', value: 'Ocasonally Non-Veg'},
        {name: 'Eggetarian', value: 'Eggetarian'},
        {name: 'Jain', value: 'Jain'},
        {name: 'Vegan', value: 'Vegan'}
        ];
        const annualIncome = [
            {name: 'upto 1 Lakh yearly', value: 'upto 1 Lakh yearly'},
            {name: '1 Lakh to 2 Lakh yearly', value: '1 lakh to 2 Lakh yearly'},
            {name: '2 lakh - 4 Lakh yearly', value: '2 lakh - 4 Lakh yearly'},
            {name: '4 lakh - 7 Lakh yearly', value: '4 lakh - 7 Lakh yearly'},
            {name: '7 lakh - 10 Lakh yearly', value: '7 lakh - 10 Lakh yearly'},
            {name: '10 And Above Lakh yearly', value: '10 And Above Lakh yearly'},
            
             ];                     
      return(
       <div class="w3ls-list">
         
           <h2>User Details</h2>
           <form action="Dashboard" method="post">
           <div class="form-row">
           <div class="form-group col-md-4">
            <label for="inputPassword4">First Name</label>
            <input type="text" class="form-control" id="inputPassword4" value={this.state.firstName_value }></input>
			</div>
            <div class="form-group col-md-4">
            <label for="inputPassword4">Middle Name</label>
            <input type="text" class="form-control" id="inputPassword4" value={this.state.middleName_Value }></input>
			</div>
            <div class="form-group col-md-4">
            <label for="inputPassword4">Last Name</label>
            <input type="text" class="form-control" id="inputPassword4" value={this.state.lastName_Value }></input>
			</div>
        </div>
        <div class="form-row">
        <div class="form-group col-md-4">
            <label >ProfileFor</label>
            <select id="inputHeight" class="form-control"  onChange={(e)=>this.onchange_profileFor(e)} value={this.state.profileFor_Value}>
                <option>--Select--</option>
                  <option value="Myslef">Myself</option>   
                  <option value="Son">Son</option>   
                  <option value="Daughter">Daughter</option>   
                  <option value="Brother">Brother</option>   
                  <option value="Sister">Sister</option>  
                  <option value="Relative">Relative</option>
                  <option value="Friend">Friend</option>	
            </select>
          </div>
          <div class="form-group col-md-4">
            <label >Gender</label>
            <select id="inputHeight" class="form-control"  onChange={(e)=>this.onchange_Gender(e)} value={this.state.gender_Value}>
                <option value="">--Select--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            
            </select>
          </div>
          <div class="form-group col-md-4">
            <label for="inputPassword4">Date Of Birth</label>
            <input type="date" class="form-control" id="inputPassword4" value={this.date}></input>
			</div>
            
        </div>
        <div class="form-row">
        <div class="form-group col-md-4">
            <label >Religion</label>
            <select id="inputHeight" class="form-control"  onChange={(e)=>this.onchange_Religion(e)} value={this.state.religion_Value}>
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
         
          <div class="form-group col-md-4">
            <label for="inputPassword4">Mobile Number</label>
            <input type="text" class="form-control" id="inputPassword4" value={this.state.mobile_Value }></input>
			</div>
            <div class="form-group col-md-4">
            <label for="inputPassword4">Email Id</label>
            <input type="email" class="form-control" id="inputPassword4" value={this.state.email_Value }></input>
			</div>
            
        </div>


           </form>

           <h2>Additional Details</h2>
        <form action="Dashboard" method="post">
        <div><span className="error_Common">{this.state.searchAgeError}</span></div>
        <div class="form-row">
        <div class="form-group col-md-4">
            <label >Select Height</label>
            <select id="inputHeight" class="form-control"  onChange={(e)=>this.onchange_Height(e)}  value={this.state.setHeight}>
                <option>Select Height</option>
            {heights.length >0 && heights.map((data,key) =>
            <option key={key} value={data.value}>{data.name}</option>)}
            </select>
          </div>
          <div class="form-group col-md-4">
            <label >Marital Status</label>
            <select id="inputState" class="form-control"  onChange={(e)=>this.onchange_Marital_Status(e)} value={this.state.setMaritalStatus}>
                <option>Select Marital Status</option>
            {maritalStatus.length >0 && maritalStatus.map((data,key) =>
            <option key={key} value={data.value}>{data.name}</option>)}
            </select>
          </div>
          <div class="form-group col-md-4">
            <label >Highest Qualification</label>
            <select id="inputState" class="form-control"  onChange={(e)=>this.onchange_qualification(e)} value={this.state.setQualification}>
                <option>Select Qualification</option>
            {qualifications.length >0 && qualifications.map((data,key) =>
            <option key={key} value={data.value}>{data.name}</option>)}
            </select>
          </div>
         
        </div>
        <div class="form-row">
        <div class="form-group col-md-4">
            <label for="inputPassword4">College/University</label>
            <input type="text" class="form-control" id="inputPassword4" placeholder="Enter your college/university name"  onChange={(e)=>this.onchange_college(e)} value={this.state.setCollege}></input>
          </div>
          <div class="form-group col-md-4">
            <label >Works With</label>
            <select id="inputState" class="form-control"  onChange={(e)=>this.onchange_worksWith(e)} value={this.state.setWorksWith}>
            <option>--Select--</option>
            {worksWith.length >0 && worksWith.map((data,key) =>
            <option key={key} value={data.value}>{data.name}</option>)}
            </select>
          </div>
          <div class="form-group col-md-4">
            <label >Work As</label>
            <select id="inputState" class="form-control"  onChange={(e)=>this.onchange_workAs(e)} value={this.state.setWorkAs}>
            <option>--Select--</option>
            {worksAs.length >0 && worksAs.map((data,key) =>
            <option key={key} value={data.value}>{data.name}</option>)}
            </select>
          </div>
         
        </div>
        <div class="form-row">
        <div class="form-group col-md-4">
            <label >Select Diet</label>
            <select id="inputState" class="form-control"  onChange={(e)=>this.onchange_Diet(e)} value={this.state.setDiet}>
            <option>--Select--</option>
            {diet.length >0 && diet.map((data,key) =>
            <option key={key} value={data.value}>{data.name}</option>)}
            </select>
          </div>
          <div class="form-group col-md-4">
            <label >Select State</label>
            <select id="inputState" class="form-control"  onChange={(e)=>this.onchange_state(e)} >
            <option>--Select--</option>
            {stateRegional.length >0 && stateRegional.map((data,key) =>
            <option key={key} value={data.value}>{data.name}</option>)}
            </select>
          </div>
          <div class="form-group col-md-4">
            <label >Select City</label>
            <select id="inputState" class="form-control"  onChange={(e)=>this.onchange_city(e)} value={this.state.setCity}> 
            <option value="">--Select--</option>
            {this.state.getListOfCity_From_Backend.length >0 && this.state.getListOfCity_From_Backend.map((data,key) =>
            <option key={key} value={data.value}>{data.name}</option>)}
            </select>
          </div>
         
        </div>
        <div class="form-row">
        <div class="form-group col-md-4">
            <label >Sub Community</label>
            <select id="inputState" class="form-control"  onChange={(e)=>this.onchange_subCommunity(e)} value={this.state.setSubCommunity}>
            <option>--Select--</option>
            {subCommunities.length >0 && subCommunities.map((data,key) =>
            <option key={key} value={data.value}>{data.name}</option>)}
            </select>
          </div>
          <div class="form-group col-md-4">
            <label >Mother Tongue</label>
            <select id="inputState" class="form-control"  onChange={(e)=>this.onchange_motherTongue(e)} value={this.state.setMotherTongue}>
            <option>--Select--</option>
            {motherToung.length >0 && motherToung.map((data,key) =>
            <option key={key} value={data.value}>{data.name}</option>)}
            </select>
          </div>
          <div class="form-group col-md-4">
            <label >Select Salary</label>
            <select id="inputState" class="form-control"  onChange={(e)=>this.onchange_Salary(e)} value={this.state.setSalary}>
            <option>--Select--</option>
            {annualIncome.length >0 && annualIncome.map((data,key) =>
            <option key={key} value={data.value}>{data.name}</option>)}
            </select>
          </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
    <label for="exampleFormControlTextarea1">Bio</label>
    <textarea class="form-control"  rows="4" onChange={(e)=>this.onchange_Bio(e)} value={this.state.setBio}></textarea>
  </div>
  <div class="form-group col-md-4">
    <input type="file" class="custom-file-input" id="validatedCustomFile" accept="image/*"  onChange={(e)=>this.onChangeImage(e)}></input>
    <img
                  class="profile-img"
                  
                  src={this.state.profileImg}
    />
  </div>
  
        </div>
      </form>
      <button type="submit" class="btn btn-primary" onClick={(e)=>this.onSubmitAdditionalData()}>Submit</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(AdditionalProfileDetails);