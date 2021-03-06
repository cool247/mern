import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        ExerTrack
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Exercises
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/exercise" className="nav-link">
              Create Exercise Log
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link">
              Create User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
