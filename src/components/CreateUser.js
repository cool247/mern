import React, { Component } from "react";
import axios from "axios";

class CreateUser extends Component {
  state = {
    username: "",
  };

  onInputChange = e => {
    this.setState({ username: e.target.value });
  };

  onUserSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
    };

    axios
      .post("http://localhost:5000/users/add", user)
      .then(res => console.log(res))
      .catch(err => {
        console.log(err);
      });

    window.location = "/";
  };

  render() {
    return (
      <div className="container">
        <h3>Create New User</h3>
        <form onSubmit={this.onUserSubmit}>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              className="form-control"
              type="text"
              id="username"
              onChange={this.onInputChange}
              value={this.state.username}
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.onUserSubmit}
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateUser;
