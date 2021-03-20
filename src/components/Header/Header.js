import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
  return (
    <header>
      <div className="navbar navbar-inverse-blue navbar-fixed-top header_Backgound">
        <div className="navbar-inner  ">
          <div className="container-fluid">
            <div className="menu">
              <div className="cd-dropdown-wrapper"></div>
            </div>
            <div className="pull-right">
              <nav className="navbar nav_bottom" role="navigation">
                <div className="navbar-header nav_2">
                  <button
                    type="button"
                    className="navbar-toggle collapsed navbar-toggle1"
                    data-toggle="collapse"
                    data-target="#bs-megadropdown-tabs"
                  >
                    Menu
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="bs-megadropdown-tabs"
                >
                  <ul className="nav navbar-nav nav_1">
                    <li>
                      <Link to="/Dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="/Search">Search</Link>
                    </li>
                    <li>
                      <Link to="/MatchesProfile">Matches profile</Link>
                    </li>
                    <li>
                      <Link to="/LikeProfile">Like Profile</Link>
                    </li>
                    <li>
                      <Link to="/AdditionalProfileDetails">User Profile (Profilefor)</Link>
                    </li>
                    <li>
                      <Link to="/Registration">
                        <span className="glyphicon glyphicon-user"></span> Sign
                        Up
                      </Link>
                    </li>
                    <li>
                      <Link to="/Login">
                        <span className="glyphicon glyphicon-log-in"></span>{" "}
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </header>
  );
}
const mapStateToProps = (state) => {
  return {
    Logout: state.Menu_Render,
    Email: state.Email,
    Role: state.Role,
  };
};
export default connect(mapStateToProps)(Header);
