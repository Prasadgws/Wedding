import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import SelectSearch from "react-select-search";

import Multistep from "react-multistep";

class ProfileForOne extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    const heights = [
      { name: "4ft - 121 cm", value: "4ft - 121 cm" },
      { name: "4ft 1in - 124cm", value: "4ft 1in - 124cm" },
      { name: "4ft 2in - 127cm", value: "4ft 2in - 127cm" },
      { name: "4ft 3in - 127cm", value: "4ft 3in - 127cm" },
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

    return (
      <div>
        
           
              <div
                id="parentHorizontalTab"
                style={{ display: "block", width: "100%", margin: "0px" }}
              >
                <div
                  class="resp-tabs-container hor_1 profile_for_container"
                  style={{ "border-color": "rgb(193, 193, 193)" }}
                >
                  <h2
                    class="resp-accordion hor_1 "
                    role="tab"
                    aria-controls="hor_1_tab_item-0"
                   
                  >
                    <span class="resp-arrow"></span>Profile{" "}
                  </h2>
                  <div
                    class="resp-tab-content hor_1"
                    aria-labelledby="hor_1_tab_item-0"
                  >
                    <div class="w3_regular_search">
                      <form action="#" method="post">
                        <div class="form_but1">
                          <label class="col-sm-5 control-label1" for="sex">
                            Height :{" "}
                          </label>
                          <div class="w3agile__text col-sm-7 w3agile_banner_btom_login_left1">
                            <SelectSearch
                              options={heights}
                              class=""
                              search
                              value="sv"
                              name="language"
                              placeholder="Choose your height"
                            />
                          </div>
                          <div class="clearfix"></div>
                        </div>
                        <div class="form_but1">
                          <label class="col-sm-5 control-label1" for="sex">
                            Marital Status :{" "}
                          </label>
                          <div class="col-sm-7 form_radios">
                            <input
                              type="radio"
                              name="maritial"
                              value="Never Married"
                            />{" "}
                            Never Married &nbsp;&nbsp;
                            <input
                              type="radio"
                              name="maritial"
                              value="Divorced"
                            />{" "}
                            Divorced &nbsp;&nbsp;
                            <input
                              type="radio"
                              name="maritial"
                              value="Widowed"
                            />{" "}
                            Widowed &nbsp;&nbsp;
                            <input
                              type="radio"
                              name="maritial"
                              value="Awaiting Divorce"
                            />{" "}
                            Awaiting Divorce &nbsp;&nbsp;
                            <input
                              type="radio"
                              name="maritial"
                              value="Annulled"
                            />{" "}
                            Annulled
                          </div>
                          <div class="clearfix"> </div>
                        </div>
                        <div class="form_but1">
                          <label class="col-sm-5 control-label1" for="sex">
                            Highest Qualification :{" "}
                          </label>
                          <div class="col-sm-7 form_radios">
                            <SelectSearch
                              options={qualifications}
                              class=""
                              search
                              value="sv"
                              name="language"
                              placeholder="Choose your highest qualification"
                            />
                          </div>
                          <div class="clearfix"> </div>
                        </div>
                        <div class="form_but1">
                          <label class="col-sm-5 control-label1" for="sex">
                            College/University :{" "}
                          </label>
                          <div class="col-sm-7 form_radios">
                            <input
                              type="text"
                              class="profile-details_text_input"
                              name="language"
                              placeholder="Enter college/university"
                            />
                          </div>
                          <div class="clearfix"> </div>
                        </div>
                        <div class="form_but1">
                          <label class="col-sm-5 control-label1" for="sex">
                            Works With :{" "}
                          </label>
                          <div class="col-sm-7 form_radios">
                            <SelectSearch
                              options={worksWith}
                              class=""
                              value="sv"
                              name="language"
                              placeholder="Works with"
                            />
                          </div>
                          <div class="clearfix"> </div>
                        </div>
                        <div class="form_but1">
                          <label class="col-sm-5 control-label1" for="sex">
                            Works As :{" "}
                          </label>
                          <div class="col-sm-7 form_radios">
                            <SelectSearch
                              options={worksAs}
                              class=""
                              search
                              value="sv"
                              name="language"
                              placeholder="Works as"
                            />
                          </div>
                          <div class="clearfix"> </div>
                        </div>

                        <input type="submit" value="Save" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          
          
        

        <div class="clearfix"></div>
      </div>
    );
  }
}
export default withRouter(ProfileForOne);

