import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";

class EditExercise extends Component {
  state = {
    username: "",
    description: "",
    duration: 0,
    date: null,
  };
  componentDidMount() {
    axios
      .get(`http://localhost:5000/exercises/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          username: res.data.username,
          description: res.data.description,
          duration: Number(res.data.duration),
          date: new Date(res.data.date),
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  onInputChange = (e, field) => {
    switch (field) {
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
      .post(
        `http://localhost:5000/exercises/update/${this.props.match.params.id}`,
        exercise
      )
      .then(res => console.log(res.data))
      .catch(err => {
        console.log(err);
      });
    window.location = "/";
  };
  render() {
    return (
      <div className="container">
        <h3>Edit Exercise</h3>
        <form onSubmit={this.onExerciseFormSubmit}>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              readOnly
              type="text"
              id="username"
              className="form-control"
              value={this.state.username}
            />
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

export default EditExercise;
