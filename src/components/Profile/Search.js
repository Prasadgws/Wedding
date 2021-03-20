import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import CommonServices from "../../Services/commonService"
import {connect} from 'react-redux'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        setAge:"",
        setMaritalStatus:"",
        setSalary:"",
        setHeight:"",
        setCity:"",
        setMotherTongue:"",
        setReligion:"",
        getListOfCity_From_Backend:"",
        searchMaritalStatusErrorGlow:"",
        searchSalaryStatusErrorGlow:"",
        searchHeightErrorGlow:"",
        searchCityErrorGlow:"",
        searchAgeErrorGlow:"",
        searchReligionErrorGlow:"",
        searchMotherTongueErrorGlow:"",
        searchAgeError:"",
        searchMaritalStatusError:"",
        searchSalaryStatusError:"",
        searchHeightStatusError:"",
        searchCityStatusError:"",
        searchReligionStatusError:"",
        searchMotherTongueError:"",
        searchDefalultError:""
    };
    this.serviceObj = new CommonServices();
  }

  componentDidMount() {
  }

  getStateId = (e) =>{
    if(e.target.value!= "State")
    {
        
        let regdata={
          "state_id": e.target.value
    }
   this.serviceObj.submitData_By_Post(regdata,this.getCityCallBack,"getCity");
  }
 
  }

  getCityCallBack = (response)=>{

    debugger
    console.log("111111111111111111111111111111111111111",response.data);
    
      alert(response.data);
      this.setState({
        getListOfCity_From_Backend :response.data
      })
     
  }


  onSubmitDataValidation =()=>{
    
    if(this.state.setMaritalStatus =="" &&  this.state.setSalary =="" && this.state.setHeight =="" && this.state.setCity =="" && this.state.setAge =="" && this.state.setReligion== "" && this.state.setMotherTongue =="")
    {
      this.setState({
        searchDefalultError:"All Fields Are mandatory Please select proper data in all field"
      })
     
    
      return false;
  }
  else 
  {
      return true;
  }
}
  componentDidUpdate() {}

  onSubmitRegData =(e)=>{
    if(this.onSubmitDataValidation())
    {
    debugger
    let regdata=
    {
      "user_id": sessionStorage.getItem("user_id_unique"),    
      "marital_status": this.state.setMaritalStatus,
      "salary": this.state.setSalary,
      "height": this.state.setHeight,
      "city": this.state.setCity,
      "age": this.state.setAge ,
      "religion":this.state.setReligion,
      "motherTongue":this.state.setMotherTongue
    }
    this.serviceObj.submitData_By_Post(regdata,this.registerCallBack,"filterData");
  }
  }

  registerCallBack = (response)=>{

    debugger
    console.log("111111111111111111111111111111111111111",response.data);
      this.props.history.push({
        pathname:"/MatchesProfile",
        data:response.data
      });
   
  }
  onchange_Age = (e)=>{
   
    if(e.target.value=="default")
    {
      this.setState({
        searchAgeError:"* Please select valid age",
        searchAgeErrorGlow:"0 0 5px #e14e4e"
      })
    }
    else{
      console.log("=========setAge========setAge========e.target.value====",e.target.value)
      this.setState({
      setAge :e.target.value,
      searchAgeError:"",
      searchAgeErrorGlow:""
      })
    }
    
  }
  onchange_Height = (e)=>{
    if(e.target.value=="default")
    {
      this.setState({
        searchHeightStatusError:"* Please select valid height",
        searchHeightErrorGlow:"0 0 5px #e14e4e"
      })
    }
    else{
      console.log("=========setHeight========setHeight========e.target.value====",e.target.value)
      this.setState({
        setHeight :e.target.value,
        searchHeightStatusError:"",
        searchHeightErrorGlow:""
      })
    }
   
  }
  onchange_MaritalStatus= (e)=>{
    if(e.target.value=="default")
    {
      this.setState({
        searchMaritalStatusError:"* Please select valid Marital Status",
        searchMaritalStatusErrorGlow:"0 0 5px #e14e4e"
      })
    }
    else{
   
      console.log("=========setMaritalStatus========setMaritalStatus========e.target.value====",e.target.value)
      this.setState({
        setMaritalStatus :e.target.value,
        searchMaritalStatusError:"",
        searchMaritalStatusErrorGlow:""
      })
    }
   
  }

  onchange_City= (e)=>{
    if(e.target.value=="default")
    {
      this.setState({
        searchCityStatusError:"* Please select valid city",
        searchCityErrorGlow:"0 0 5px #e14e4e"
      })
    }else{
     
    console.log("=========setCity========setCity========e.target.value====",e.target.value)
    this.setState({
      setCity :e.target.value,
      searchCityStatusError:"",
      searchCityErrorGlow:""
    })
    }
    
  }

  onchange_Religion= (e)=>{
    if(e.target.value=="default")
    {
      this.setState({
        searchReligionStatusError:"* Please select valid religion",
        searchReligionErrorGlow:"0 0 5px #e14e4e"
      })
    }else{
   
    console.log("=========setReligion========setReligion========e.target.value====",e.target.value)
    this.setState({
      setReligion :e.target.value,
      searchReligionStatusError:"",
        searchReligionErrorGlow:""
    })
  }
  }

  onchange_MotherTongue= (e)=>{
    if(e.target.value=="default")
    {
      this.setState({
        searchMotherTongueError:"* Please select valid mother tongue",
        searchMotherTongueErrorGlow:"0 0 5px #e14e4e"
      })
    }else{
    console.log("=========setMotherTongue========setMotherTongue========e.target.value====",e.target.value)
    this.setState({
      setMotherTongue :e.target.value,
      searchMotherTongueError:"",
      searchMotherTongueErrorGlow:""
    })
  }
  }
  onchange_Salary= (e)=>{
    if(e.target.value=="default")
    {
      this.setState({
        searchSalaryStatusError:"* Please select valid salary",
        searchSalaryStatusErrorGlow:"0 0 5px #e14e4e"
      })
    }else{
    console.log("=========setSalary========setSalary========e.target.value====",e.target.value)
    this.setState({
      setSalary :e.target.value,
      searchSalaryStatusError:"",
      searchSalaryStatusErrorGlow:""
    })
  }
  }


  render() {
    return (
      <div class="w3ls-list">
        <div class="container">
          <h2>Search your Match</h2>
          <div class="col-md-9 profiles-list-agileits">
            <div
              id="parentHorizontalTab"
              style={{ display: "block", width: "100%", margin: "0px" }}
            >
              
              <div
                class="resp-tabs-container hor_1"
                style={{ "border-color": "rgb(193, 193, 193)" }}
              >
               
                <div
                  class="resp-tab-content hor_1"
                  aria-labelledby="hor_1_tab_item-0"
                >
                   <span className="error_Common">{this.state.searchDefalultError}</span>
                  <div class="w3_regular_search">
                    <form >
                      <span ><h4 font color="red">Note - All field are mandatory</h4></span>
                      <div class="form_but1">
                        <label class="col-sm-5 control-label1" for="sex">
                          Age in years :{" "}
                        </label>
                        <div class="col-sm-7 form_radios">
                        <div class="select-block1">
                          <select
                            id=""
                            onChange={(e)=>this.onchange_Age(e)}
                            class="frm-field required"
                            style={{"box-shadow":this.state.searchAgeErrorGlow}}
                          >
                            <option value="default">Select Age</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                            <option value="32">32</option>
                            <option value="33">33</option>
                            <option value="34">34</option>
                            <option value="35">35</option>
                            <option value="36">36</option>
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">43</option>
                            <option value="43">44</option>
                            <option value="44">45</option>
                            <option value="45">46</option>
                            <option value="46">47</option>
                            <option value="47">48</option>
                            <option value="48">49</option>
                            <option value="49">50</option>
                            <option value="50">51</option>
                            <option value="51">52</option>
                            <option value="52">53</option>
                          </select>
                          </div>
                          <div>
                            <span className="error_Common">{this.state.searchAgeError}</span></div>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                      <div class="form_but1">
                        
                        <label class="col-sm-5 control-label1" for="sex">
                          Salary :{" "}
                        </label>
                        <div class="col-sm-7 form_radios">
                        <div class="select-block1">
                          <select
                            id=""
                            onChange={(e)=>this.onchange_Salary(e)}
                            class="frm-field required"
                            style={{"box-shadow":this.state.searchSalaryStatusErrorGlow}}
                          >
                            <option value="default">Select Income</option>
                            <option value="upto 1 Lakh yearly">upto 1 Lakh yearly</option>
                            <option value="1 Lakh to 2 Lakh yearly">1 Lakh to 2 Lakh yearly</option>
                            <option value="2 Lakh - 4 Lakh yearly">2 Lakh - 4 Lakh yearly</option>
                            <option value="4 Lakh - 7 Lakh yearly">4 Lakh - 7 Lakh yearly</option>
                            <option value="7 Lakh - 10 Lakh yearly">7 Lakh - 10 Lakh yearly</option>
                            <option value="10 Lakh And Above yearly">10 Lakh And Above yearly</option>
                            
                          </select> 
                          </div>
                          <div><span className="error_Common">{this.state.searchSalaryStatusError}</span></div>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                      <div class="form_but1">
                        <label class="col-sm-5 control-label1" for="sex">
                          Height :{" "}
                        </label>
                        <div class="col-sm-7 form_radios">
                        <div class="select-block1">
                          <select
                            id=""
                            onChange={(e)=>this.onchange_Height(e)}
                            class="frm-field required"
                            style={{"box-shadow":this.state.searchHeightErrorGlow}}
                          >
                             <option value="default">Select Height</option>
                            <option value="121">4ft - 121 cm</option>
                            <option value="124">4ft 1in - 124cm</option>
                            <option value="127">4ft 2in - 127cm</option>
                            <option value="129">4ft 3in - 129cm</option>
                            <option value="132">4ft 4in - 132cm</option>
                            <option value="134">4ft 5in - 134cm</option>
                            <option value="137">4ft 6in - 137cm</option>
                            <option value="139">4ft 7in - 139cm</option>
                            <option value="142">4ft 8in - 142cm</option>
                            <option value="144">4ft 9in - 144cm</option>
                            <option value="147">4ft 10in - 147cm</option>
                            <option value="149">4ft 11in - 149cm</option>
                            <option value="152">5ft - 152cm</option>
                            <option value="154">5ft 1in - 154cm</option>
                            <option value="157">5ft 2in - 157cm</option>
                            <option value="160">5ft 3in - 160cm</option>
                            <option value="162">5ft 4in - 162cm</option>
                            <option value="165">5ft 5in - 165cm</option>
                            <option value="167">5ft 6in - 167cm</option>
                            <option value="170">5ft 7in - 170cm</option>
                            <option value="172">5ft 8in - 172cm</option>
                            <option value="175">5ft 9in - 175cm</option>
                            <option value="177">5ft 10in - 177cm</option>
                            <option value="180">5ft 11in - 180cm</option>
                            <option value="182">6ft - 182cm</option>
                            <option value="185">6ft 1in - 185cm</option>
                            <option value="187">6ft 2in - 187cm</option>
                            <option value="190">6ft 3in - 190cm</option>
                            <option value="193">6ft 4in - 193cm</option>
                            <option value="195">6ft 5in - 195cm</option>
                            <option value="198">6ft 6in - 198cm</option>
                            <option value="200">6ft 7in - 200cm</option>
                            <option value="203">6ft 8in - 203cm</option>
                            <option value="205">6ft 9in - 205cm</option>
                            <option value="208">6ft 10in - 208cm</option>
                            <option value="210">6ft 11in - 210cm</option>
                            <option value="213">7ft - 213cm</option>
                          </select>
                          </div>
                        </div>
                        <div><span className="error_Common">{this.state.searchHeightStatusError}</span></div>
                        <div class="clearfix"></div>
                      </div>
                      <div class="form_but1">
                        <label class="col-sm-5 control-label1" for="sex">
                          Marital Status :{" "}
                        </label>
                        <div class="col-sm-7 form_radios"  >
                          <input type="radio" class="radio_1" name="radio" value="Single"
                           onChange={(e)=>this.onchange_MaritalStatus(e)}
                           style={{"box-shadow":this.state.searchMaritalStatusErrorGlow}}/>
                          Single &nbsp;&nbsp;
                          <input
                            type="radio"
                            class="radio_1"
                            value="Divorced"
                            name="radio"
                           onChange={(e)=>this.onchange_MaritalStatus(e)}
                           style={{"box-shadow":this.state.searchMaritalStatusErrorGlow}}
                          />{" "}
                          Divorced &nbsp;&nbsp;
                          <input
                            type="radio"
                            class="radio_1"
                            name="radio"
                            value="Widowed"
                            onChange={(e)=>this.onchange_MaritalStatus(e)}
                            style={{"box-shadow":this.state.searchMaritalStatusErrorGlow}}
                          />{" "}
                          Widowed &nbsp;&nbsp;
                          <input
                            type="radio"
                            class="radio_1"
                            value="Separated"
                            name="radio"
                            onChange={(e)=>this.onchange_MaritalStatus(e)}
                            style={{"box-shadow":this.state.searchMaritalStatusErrorGlow}}
                          />{" "}
                          Separated &nbsp;&nbsp;
                          <input
                            type="radio"
                            name="radio"
                            class="radio_1"
                            value="Any"
                            onChange={(e)=>this.onchange_MaritalStatus(e)}
                            style={{"box-shadow":this.state.searchMaritalStatusErrorGlow}}
                          />{" "}
                          Any
                        </div>
                        <div class="clearfix"> </div>
                      </div>
                     
                      <div class="form_but1">
                        <label class="col-sm-5 control-label1" for="sex">
                          State :{" "}
                        </label>
                        <div class="col-sm-7 form_radios">
                          <div class="select-block1">
                            <select onChange={(e)=>this.getStateId(e)}>
                              <option value="default">Select State</option>
                              <option value="1">Andhra Pradesh</option>
                              <option value="2">Arunachal Pradesh</option>
                              <option value="3">Assam</option>
                              <option value="4">Bihar</option>
                              <option value="5">Chhattisgarh</option>
                              <option value="6">Goa</option>
                              <option value="7">Gujarat</option>
                              <option value="8">Haryana</option>
                              <option value="9">Himachal Pradesh</option>
                              <option value="10">Jharkhand</option>
                              <option value="11">Karnataka</option>
                              <option value="12">Kerala</option>
                              <option value="13">Madhya Pradesh</option>
                              <option value="14">Maharashtra</option>
                              <option value="15">Manipur</option>
                              <option value="16">Meghalaya</option>
                              <option value="17">Mizoram</option>
                              <option value="18">Nagaland</option>
                              <option value="19">Odisha</option>
                              <option value="20">Punjab</option>
                              <option value="21">Rajasthan</option>
                              <option value="22">Sikkim</option>
                              <option value="23">Tamil Nadu</option>
                              <option value="24">Telangana</option>
                              <option value="25">Tripura</option>
                              <option value="26">Uttarakhand</option>
                              <option value="27">Uttar Pradesh</option>
                              
                            </select>
                          </div>
                        </div>
                        <div class="clearfix"> </div>
                      </div>
                      <div class="form_but1">
                        <label class="col-sm-5 control-label1" for="sex">
                          District / City :{" "}
                        </label>
                        <div class="col-sm-7 form_radios">
                          <div class="select-block1">
                            <select  onChange={(e)=>this.onchange_City(e)}
                             style={{"box-shadow":this.state.searchCityErrorGlow}}>
                            <option  value="default">Select City</option>
                            {this.state.getListOfCity_From_Backend.length >0 && this.state.getListOfCity_From_Backend.map((data,key) =>
                            <option key={key} value={data.name}>{data.name}</option>
 )}
                            </select>
                          </div>
                        
                        </div>
                        <div><span className="error_Common">{this.state.searchCityStatusError}</span></div>
                        <div class="clearfix"> </div>
                      </div>
                      
                      <div class="form_but1">
                        <label class="col-sm-5 control-label1" for="sex">
                          Religion :{" "}
                        </label>
                        <div class="col-sm-7 form_radios">
                          <div class="select-block1">
                            <select  onChange={(e)=>this.onchange_Religion(e)}
                             style={{"box-shadow":this.state.searchReligionErrorGlow}}>
                            <option value="default">Select Religion</option>
                              <option value="Hindu">Hindu</option>
                              <option value="Sikh">Sikh</option>
                              <option value="Jain-All">Jain-All</option>
                              <option value="Jain-Digambar">Jain-Digambar</option>
                              <option value="Jain-Others">Jain-Others</option>
                              <option value="Muslim-All">Muslim-All</option>
                              <option value="Muslim-Shia">Muslim-Shia</option>
                              <option value="Muslim-Sunni">Muslim-Sunni</option>
                              <option value="Muslim-Others">Muslim-Others</option>
                              <option value="Christian-All">Christian-All</option>
                              <option value="Christian-Catholic">Christian-Catholic</option>
                              <option value="Jewish">Jewish</option>
                              <option value="Inter-Religion">Inter-Religion</option>
                            </select>
                          </div>
                         
                        </div>
                        <div><span className="error_Common">{this.state.searchReligionStatusError}</span></div>
                        <div class="clearfix"> </div>
                      </div>
                      <div class="form_but1">
                        <label class="col-sm-5 control-label1" for="sex">
                          Mother Tongue :{" "}
                        </label>
                        <div class="col-sm-7 form_radios">
                          <div class="select-block1">
                            <select  onChange={(e)=>this.onchange_MotherTongue(e)}
                            style={{"box-shadow":this.state.searchMotherTongueErrorGlow}}>
                            <option value="default">Select Mother Tongue</option>
                              <option value="English">English</option>
                              <option value="Marathi">Marathi</option>
                              <option value="Telugu">Telugu</option>
                              <option value="Bengali">Bengali</option>
                              <option value="Bihari">Bihari</option>
                              <option value="Hindi">Hindi</option>
                              <option value="Koshali">Koshali</option>
                              <option value="Khasi">Khasi</option>
                              <option value="Tamil">Tamil</option>
                              <option value="Urdu">Urdu</option>
                              <option value="Manipuri">Manipuri</option>
                            </select>
                          </div>
                         
                        </div>
                        <div><span className="error_Common">{this.state.searchMotherTongueError}</span></div>
                        <div class="clearfix"> </div>
                      </div>
                      <div class="form_but1">
                      <div className="col-md-6"></div>
                        <div className="col-md-4">
                        <input type="submit" class ="btn btn-lg btn-primary btn-block btn_Sign_In color_White_Any_Text" value="Search" onClick={(e)=>this.onSubmitRegData(e)}/>
                        </div>
                    
                      </div>
                      
                    </form>
                  </div>
                </div>
             </div>
             </div>
             </div>
             </div>
             </div>    
    );
  }
}
export default withRouter(Search);
