import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import CommonServices from "../../Services/commonService";
import { connect } from "react-redux";
var ParentCategoryId_Get_List;
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[
            {
                "ParentCategoryId": 300000383283089,
                "CategoryId": 300000383283310,
                "CategoryShortName": "5_EXT_ACCOUNT"
            },
            {
                "ParentCategoryId": 300000383283300,
                "CategoryId": 300000383283301,
                "CategoryShortName": "1_EXT_AUTO_DELIVERY"
            },
            {
                "ParentCategoryId": 300000383730865,
                "CategoryId": 300000383730866,
                "CategoryShortName": "1_EXT_BAGGED_BEVERAGES"
            },
            {
                "ParentCategoryId": 300000383283091,
                "CategoryId": 300000383730865,
                "CategoryShortName": "2_EXT_BEVERAGES"
            },
            {
                "ParentCategoryId": 300000383730865,
                "CategoryId": 300000383730867,
                "CategoryShortName": "2_EXT_CANNED_BEVERAGES"
            },
            {
                "ParentCategoryId": 300000383283300,
                "CategoryId": 300000383283302,
                "CategoryShortName": "2_EXT_CLUB_KEURIG"
            },
            {
                "ParentCategoryId": null,
                "CategoryId": 300000383283089,
                "CategoryShortName": "1_EXT_KM_HOT_US"
            },
            {
                "ParentCategoryId": 300000383283287,
                "CategoryId": 300000383283290,
                "CategoryShortName": "EXT_FREQUENTLY_ASKED_QUESTIONS"
            },
            {
                "ParentCategoryId": 300000383283293,
                "CategoryId": 300000383283299,
                "CategoryShortName": "3_EXT_GIFT_CARDS"
            },
            {
                "ParentCategoryId": 300000383283304,
                "CategoryId": 300000383283311,
                "CategoryShortName": "1_EXT_LOYALTY_PROGRAM"
            },
            {
                "ParentCategoryId": 300000383283310,
                "CategoryId": 300000383283312,
                "CategoryShortName": "1_EXT_MANAGING_YOUR_ACCOUNT"
            },
            {
                "ParentCategoryId": 300000383283293,
                "CategoryId": 300000383283294,
                "CategoryShortName": "1_EXT_ORDERING"
            },
            {
                "ParentCategoryId": 300000383283089,
                "CategoryId": 300000383283293,
                "CategoryShortName": "2_EXT_ORDERS"
            },
            {
                "ParentCategoryId": 300000383730865,
                "CategoryId": 300000383730868,
                "CategoryShortName": "3_EXT_POD_BEVERAGES"
            },
            {
                "ParentCategoryId": 300000383283089,
                "CategoryId": 300000383283091,
                "CategoryShortName": "1_EXT_PRODUCT_SUPPORT"
            },
            {
                "ParentCategoryId": 300000383283089,
                "CategoryId": 300000383283304,
                "CategoryShortName": "4_EXT_PROGRAMS"
            },
            {
                "ParentCategoryId": 300000383283310,
                "CategoryId": 300000383283621,
                "CategoryShortName": "2_EXT_REGISTER_YOUR_COFFEE_MAKER"
            },
            {
                "ParentCategoryId": 300000383283293,
                "CategoryId": 300000383283298,
                "CategoryShortName": "2_EXT_SHIPPING_RETURNS"
            },
            {
                "ParentCategoryId": 300000383283300,
                "CategoryId": 300000383283303,
                "CategoryShortName": "3_EXT_STARTER_KITS"
            },
            {
                "ParentCategoryId": 300000383283089,
                "CategoryId": 300000383283300,
                "CategoryShortName": "3_EXT_SUBSCRIPTIONS"
            },
            {
                "ParentCategoryId": 300000383283287,
                "CategoryId": 300000383283292,
                "CategoryShortName": "EXT_TROUBLESHOOTING_TIPS"
            }
        ],
        null_Catergory_Id : ""
    };

  }

  componentDidMount() {
    this.findNull()
   
  }

  componentDidUpdate() {}

  
  findNull =() =>
  {
    var __FOUNDNull = this.state.data.find(function(post, index) {
        if(post.ParentCategoryId === null)
            return true;
    });
    this.setState({
        null_Catergory_Id:__FOUNDNull.CategoryId
    })
    this.find_From_Null_Cat_Id_ParentCategoryId(__FOUNDNull.CategoryId)
   
  }
    find_From_Null_Cat_Id_ParentCategoryId = (data)=>{
     ParentCategoryId_Get_List =  this.state.data.filter(city => city.ParentCategoryId === data);
    console.log("============ParentCategoryId=====5 Parent=========",ParentCategoryId_Get_List);

    this.find_From_Cat_Id_ParentCategoryId();
  }
 
  find_From_Cat_Id_ParentCategoryId = ()=>{
    let firstValue_main = [];
    let arr = [];
    let commonArray =[];
    let cloneOfParentArray = ParentCategoryId_Get_List;
    for(let j = 0; j < ParentCategoryId_Get_List.length; j++)
    {
        for (let i = 0; i < this.state.data.length; i++) {
            //  2 = 2 
            if (this.state.data[i].ParentCategoryId === ParentCategoryId_Get_List[j].CategoryId) {
                firstValue_main.push(this.state.data[i]);
                cloneOfParentArray.push(this.state.data[i]);
                arr[j] =firstValue_main
            }
        }
        firstValue_main = [];
      
       // console.log("===========arr[i]===Subarray=================", arr[j]);
        console.log("===========acloneOfParentArray================", cloneOfParentArray[j]);
    }


    // for(var i = 0 ;i<=ParentCategoryId_Get_List.length;i++)
    // {
    //     //let newObj =  this.state.data.filter(city => city.ParentCategoryId === ParentCategoryId_Get_List[i].CategoryId);
      
    //     console.log("============ParentCategoryId_Get_List[i])==============",ParentCategoryId_Get_List[i].CategoryId);
    //     console.log("============newObj==============",newObj);
    // }



  
  }
 
  render() {
    console.log("===========null_Catergory_Id==============",this.state.null_Catergory_Id);
    return (
    <div className="testingMain_Div">
        <h2>Testing</h2>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ParentCategoryId</th>
                <th scope="col">CategoryId</th>
                <th scope="col">CategoryShortName</th>
                </tr>
            </thead>
            <tbody>
                {this.state.data.length >0 && this.state.data.map((data,key) =>
                    <tr class="row" key={key}>
                        <td>{data.ParentCategoryId}</td>
                        <td>{data.CategoryId}</td>
                        <td>{data.CategoryShortName}</td>
                    </tr>
                )}
            </tbody>
        </table>
        <h2>DIV RENDER</h2>
        <React.Fragment>
        {/* {this.state.data.length > 0 && this.state.data.map((value,key) =>
            <p>{value.CategoryId === 300000383283089 ?(<p>PRASAD</p>):(<p>No data found</p>)}</p>
        )}
        */}
        </React.Fragment>
     
    </div>
    );
  }
}



export default withRouter(Test);
