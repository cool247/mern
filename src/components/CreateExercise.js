import React, { Component } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  state = {
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  };
  componentDidMount() {
    axios.get("http://localhost:5000/users").then(res => {
      this.setState({
        users: res.data.map(user => user.username),
      });
    });
  }
  onInputChange = (e, field) => {
    switch (field) {
      case "username":
        this.setState({ username: e.target.value });
        break;
      case "description":
        this.setState({ description: e.target.value });
        break;
      case "duration":
        this.setState({ duration: e.target.value });
        break;
      case "date":
        this.setState({ date: e });
        break;

      default:
        break;
    }
  };

  onExerciseFormSubmit = e => {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then(res => console.log(res.data));

    window.location = "/";
  };
  render() {
    return (
      <div className="container">
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onExerciseFormSubmit}>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <select
              type="text"
              id="username"
              className="form-control"
              onChange={e => this.onInputChange(e, "username")}
              value={this.state.username}
            >
              {this.state.users.map(user => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              className="form-control"
              type="text"
              id="description"
              onChange={e => this.onInputChange(e, "description")}
              value={this.state.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration(in min)</label>
            <input
              className="form-control"
              type="text"
              id="duration"
              onChange={e => this.onInputChange(e, "duration")}
              value={this.state.duration}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <br />
            <DatePicker
              selected={this.state.date}
              onChange={e => this.onInputChange(e, "date")}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Create Exercise Log
            </button>
          </div>
        </form>
      </div>
    );
  }
}
