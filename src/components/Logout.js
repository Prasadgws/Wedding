import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    sessionStorage.clear();
  }

  Logout = () => {
    this.props.changeName("Login", "");
    this.props.history.push({
      pathname: "/Login",
    });
  };
  render() {
    return <div> {this.Logout()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    Logout: state.Menu_Render,
    Email: state.Email,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (Logout, Email) => {
      dispatch({
        type: "CHANGE_MENU",
        payload: { Logout: Logout, Email: Email },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
