import React from "react";
import { Link } from "react-router-dom";

function Luigi() {
  return (
    <div>
      <h2>Hi I'm Luigi</h2>
      <p>The Mario's Brother</p>
      <Link to="/">Click here to main page</Link>
    </div>
  );
}

export default Luigi;
