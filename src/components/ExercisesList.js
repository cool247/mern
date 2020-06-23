import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export default class ExercisesList extends Component {
  state = {
    exercises: [],
  };

  componentDidMount() {
    Axios.get("http://localhost:5000/exercises")
      .then(res => this.setState({ exercises: res.data }))
      .catch(err => {
        console.log(err);
      });
  }

  OnDeleteExercise(id) {
    Axios.delete(`http://localhost:5000/exercises/${id}`).then(res => {
      console.log(res.data);
      this.setState({
        exercises: this.state.exercises.filter(exercise => exercise._id !== id),
      });
    });
  }

  renderExerciseList() {
    return this.state.exercises.map(exercise => {
      return (
        <div key={exercise.username}>
          <h5>Name : {exercise.username.toUpperCase()}</h5>
          <p>Description : {exercise.description}</p>
          <p>Duration : {exercise.duration}</p>
          <p>Date : {exercise.date}</p>
          <Link to={`/edit/${exercise._id}`}>Edit</Link> |{"   "}
          <a onClick={this.OnDeleteExercise.bind(this, exercise._id)}>Delete</a>
          <hr />
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderExerciseList()}</div>;
  }
}
