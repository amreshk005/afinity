import React, { Component } from "react";
import { authHandler } from "../../redux/action";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  inputHandler = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { username, password } = this.state;
    console.log(username, password);
    if (username === "amresh" && password === "amresh") {
      this.props.authHandler();
      this.props.history.push({ pathname: "/" });
    } else {
      alert("Please Enter correct username and password");
    }
  };

  render() {
    console.log(this.props);
    return (
      <>
        <div className="modal fade" id="loginModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content p-5">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Username</label>
                  <input name="username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.username} onChange={this.inputHandler} />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.inputHandler} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.submitHandler}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDisptachToProps = (dispatch) => {
  return {
    authHandler: (payload) => dispatch(authHandler(payload)),
  };
};
export default connect(null, mapDisptachToProps)(Login);
