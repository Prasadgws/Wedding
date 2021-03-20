import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import CommonServices from "../../Services/commonService"

class Card extends Component {
    debugger
    constructor(props) {
      super(props);
      console.log(props.data)
      this.state = {
        user_Id : "",
        like_Profile_Id : "",
        matchProfileResponse:
        [
          {
            "id": "T45Dfsd64",
            "name": "Prasad Wadnerkar, 5' 8' , Christian, DOB 26/12/1580, MCA/PGDCA, Rs. 15 - 20 Lakh, Software",
            //"name": "25 Years, 5' 8' , Christian, Protestant, MCA/PGDCA, Rs. 15 - 20 Lakh, Software",
            "state_id": "Smart, Intelligent, well mannered and humble boy...",
            },
            {
            "id": "ABCFDFFF4",
            "name": "25 Years, 5' 8' , Christian, Protestant, MCA/PGDCA, Rs. 15 - 20 Lakh, Software",
            "state_id": "Smart, Intelligent, well mannered and humble boy...",
            },
            {
              "id": "ABCFDFFF4",
              "name": "25 Years, 5' 8' , Christian, Protestant, MCA/PGDCA, Rs. 15 - 20 Lakh, Software",
              "state_id": "Smart, Intelligent, well mannered and humble boy...",
              },
              {
                "id": "ABCFDFFF4",
                "name": "25 Years, 5' 8' , Christian, Protestant, MCA/PGDCA, Rs. 15 - 20 Lakh, Software",
                "state_id": "Smart, Intelligent, well mannered and humble boy...",
                },
                {
                  "id": "ABCFDFFF4",
                  "name": "25 Years, 5' 8' , Christian, Protestant, MCA/PGDCA, Rs. 15 - 20 Lakh, Software",
                  "state_id": "Smart, Intelligent, well mannered and humble boy...",
                  },
                  {
                    "id": "ABCFDFFF4",
                    "name": "25 Years, 5' 8' , Christian, Protestant, MCA/PGDCA, Rs. 15 - 20 Lakh, Software",
                    "state_id": "Smart, Intelligent, well mannered and humble boy...",
                    },
                    {
                      "id": "ABCFDFFF4",
                      "name": "25 Years, 5' 8' , Christian, Protestant, MCA/PGDCA, Rs. 15 - 20 Lakh, Software",
                      "state_id": "Smart, Intelligent, well mannered and humble boy...",
                      },
        ]
      }
      this.serviceObj = new CommonServices();
      }

      likeProfileClick = (e)=>{
        alert("clicked")
        debugger
        let regdata={
            "user_Id": sessionStorage.getItem("user_id_unique"),
            "like_Profile_Id": 1
          }
    this.serviceObj.submitData_By_Post(regdata,this.likeProfileCallback,"LikeProfile");
      }

      likeProfileCallback = (response)=>{

        debugger
        alert("Profile like successfully!!!")
        console.log("111111111111111111111111111111111111111",response.message);
         
       
      }

      render() {  
  return (
    <div class="match-profile">
       {/* this.props.data */}
        {this.state.matchProfileResponse.length >0 && this.state.matchProfileResponse.map((data,key) =>
          <div class="col-md-3 one-w3-profile">
          <div class="profile-details">
            <h5>Profile ID :{data.id}</h5>
            <i class="fa fa-user-circle-o font_Awsome_User_Img" aria-hidden="true"></i>
            <div class="w3-prfr">
            {/* <p>{props.data}</p> */}
              <p>{data.name}</p>
              <a href="#" data-toggle="modal" data-target="#myModal">Like</a><span></span><a href="index.html">View</a>
              
            </div>
            <div class="clearfix"></div>
            <p class="light">{data.state_id} <a href="groom_profile.html">read more</a></p>
          </div>
        </div>
         )}
  
 
  </div>
  );
}
}



export default withRouter(Card);
