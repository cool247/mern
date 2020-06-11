import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../assets/images/pagenotfound.jpg";
class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <img src={PageNotFound} alt="404" />
        <p style={{ textAlign: "center" }}>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default NotFoundPage;
