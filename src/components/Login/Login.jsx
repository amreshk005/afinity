import React, { Component } from "react";
import { authHandler } from "../../redux/action";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { Button, Modal } from "antd/es";

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
    let found = false;
    e.preventDefault();
    this.props.user.forEach((e) => {
      if (e.username === "amresh" && e.password === "amresh") {
        localStorage.setItem("userId", JSON.stringify(e.id));
        this.props.handleOk();
        found = true;
      }
    });
    if (found === false) {
      alert("Please Enter correct username and password");
    }
  };

  render() {
    let { visible, loading, handleCancel } = this.props;
    return (
      <>
        <Modal
          visible={visible}
          title="Title"
          onOk={this.submitHandler}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.submitHandler}>
              Login
            </Button>,
          ]}
        >
          <form>
            <div className="form-group">
              <label>Username</label>
              <input name="username" type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.username} onChange={this.inputHandler} />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.inputHandler} />
            </div>
          </form>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    authHandler: (payload) => dispatch(authHandler(payload)),
  };
};
export default connect(mapStateToProps, mapDisptachToProps)(Login);
