import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import FindSolmate from "../Home/FindSolmate";
import Card from "../CommonComponents/Card";
class LikeProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="w3ls-list">
      <div class="container-fluid">
      <h2>Matrimonial Profiles list</h2>
      <div class="col-md-12 profiles-list-agileits">
        <div id="parentHorizontalTab" style={{"display": "block", "width": "100%", "margin": "0px"}}>
          <div class="resp-tabs-container hor_1" style={{"border-color": "rgb(193, 193, 193)"}}>
            <h2 class="resp-accordion hor_1 resp-tab-active" role="tab" aria-controls="hor_1_tab_item-0" style={{"background": "none white", "border-color": "rgb(193, 193, 193)"}}><span class="resp-arrow"></span>Grooms</h2><div class="resp-tab-content hor_1 resp-tab-content-active" aria-labelledby="hor_1_tab_item-0" style={{"display":"block"}}>			
            <Card data={"Prasad Wadnerkar"}></Card>
            <div class="resp-tab-content hor_1" aria-labelledby="hor_1_tab_item-1">
              <div class="clearfix"></div>
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
export default withRouter(LikeProfile);
