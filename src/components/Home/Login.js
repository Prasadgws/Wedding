import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import CommonServices from "../../Services/commonService";
import { connect } from "react-redux";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      surname: "",
      address: "",
      product: [],
      buyproduct: [],
      placeOrder: 0,
      emailError: "",
      passwordError: "",
      validFormError: "",
      nameError: "",
      addressError: "",
      phoneError: "",
      surnameError: "",
      //login fields
      loginEmail: "",
      loginEmailError: "",
      loginPassword: "",
      loginPasswordError: "",
    };
    this.serviceObj = new CommonServices();
  }

  componentDidMount() {}

  componentDidUpdate() {}

  onSubmitData = (e) => {
    e.preventDefault();
    let logindata = {
      emailid: this.state.loginEmail,
      password: this.state.loginPassword,
    };
    debugger;
    if (this.validation()) {
      this.serviceObj.submitData_By_Post(
        logindata,
        this.callBack,
        "validateLogin"
      );
      this.setState({
        validFormError: "",
      });
    } else {
      this.setState({
        validFormError: "Please fill form.",
      });
    }
  };



  callBack = (response) => {
    debugger;
    if (response.message === "success") {
      debugger;
      alert("Login successfully..." + response.message);
      sessionStorage.setItem("emailId", response.data.emailId);
      sessionStorage.setItem("user_id_unique", response.data.id);
      // this.props.changeName("Logout", response.data.emailId);

      debugger;

      this.props.history.push({
        pathname: "/Contacts",
        data: response.username,
      });
    } else {
      alert("Fill correct data..." + response.message);
    }
  };

  emailIDEnter = (e) => {
    debugger;
    if (e.target.value.length > 3) {
      this.setState({
        email: e.target.value,
        emailError: "",
      });
    } else {
      this.setState({
        emailError: "Enter valid email.",
      });
    }
  };
  passwordEnter = (e) => {
    if (e.target.value.length > 2) {
      this.setState({
        password: e.target.value,
        passwordError: "",
      });
    } else {
      this.setState({
        passwordError: "Enter correct password.",
      });
    }
  };

  surname_Enter = (e) => {
    if (e.target.value.length > 2) {
      this.setState({
        surname: e.target.value,
        surnameError: "",
      });
    } else {
      this.setState({
        surnameError: "Enter correct surname.",
      });
    }
  };
  phone_Enter = (e) => {
    if (e.target.value.length > 9) {
      this.setState({
        phone: e.target.value,
        phoneError: "",
      });
    } else {
      this.setState({
        phoneError: "Enter correct phone.",
      });
    }
  };
  address_Enter = (e) => {
    if (e.target.value.length > 2) {
      this.setState({
        address: e.target.value,
        addressError: "",
      });
    } else {
      this.setState({
        addressError: "Enter correct address.",
      });
    }
  };
  name_Enter = (e) => {
    if (e.target.value.length > 2) {
      this.setState({
        name: e.target.value,
        nameError: "",
      });
    } else {
      this.setState({
        nameError: "Enter correct name.",
      });
    }
  };

  validation = () => {
    debugger;
    if (
      this.state.loginEmail.length > 2 &&
      this.state.loginPassword.length > 2
    ) {
      return true;
    } else {
      return false;
    }
  };
  loginEmail_Enter = (e) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(e.target.value) == true) {
      this.setState({
        loginEmail: e.target.value,
        loginEmailError: "",
      });
    } else {
      this.setState({
        loginEmailError: "Enter valid email.",
      });
    }
  };

  loginPassword_Enter = (e) => {
    if (e.target.value.length > 2) {
      this.setState({
        loginPassword: e.target.value,
        loginPasswordError: "",
      });
    } else {
      this.setState({
        loginPasswordError: "Enter correct password.",
      });
    }
  };

  render() {
    return (
      <div className="login_Form_Main_Div">
        <div class="container login_Form_Div">
          <div class="row">
            <div class="col-sm-6 col-md-4 col-md-offset-4">
              <div class="account-wall">
                <img
                  class="profile-img"
                  src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                  alt=""
                />
                <form class="form-signin">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    required
                    autofocus
                    onChange={(e) => this.loginEmail_Enter(e)}
                  />
                  <br></br>
                  <span className="error_Common_Login">
                    {this.state.loginEmailError}
                  </span>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    required
                    onChange={(e) => this.loginPassword_Enter(e)}
                  />
                  <br></br>
                  <span className="error_Common_Login">
                    {this.state.loginPasswordError}
                  </span>
                  <br></br>
                  <button
                    class="btn btn-lg btn-primary btn-block btn_Sign_In color_White_Any_Text"
                    type="submit"
                    onClick={(e) => this.onSubmitData(e)}
                  >
                    Sign in
                  </button>
                  <label class="checkbox pull-left color_White_Any_Text">
                    <input type="checkbox" value="remember-me" />
                    Remember me
                  </label>
                  <a href="#" class="pull-right need-help color_White_Any_Text">
                    Need help?{" "}
                  </a>
                  <span class="clearfix"></span>
                </form>
              </div>
              <a href="#" class="text-center new-account color_White_Any_Text">
                Create an account{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Logout: state.Menu_Render,
    Email: state.Email,
    Role: state.Role,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (Logout, Email, Role) => {
      dispatch({
        type: "CHANGE_MENU",
        payload: { Logout: Logout, Email: Email, Role: Role },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
