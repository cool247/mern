import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import PageNotFound from "./components/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <br />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ExercisesList} />
            <Route path="/edit/:id" component={EditExercise} />
            <Route path="/exercise" component={CreateExercise} />
            <Route path="/user" component={CreateUser} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
