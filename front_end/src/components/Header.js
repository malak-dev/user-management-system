import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header >
      <nav>
        <Link to="/">
          <h1> User Mangagment System</h1>
          {" "}
          {/* <SpongeLogo /> */}

        </Link>
        <button type="button" class="btn btn-primary">
          <Link to="/addUser">+User</Link>
        </button>
        <button type="button" class="btn btn-primary">
          <Link to="/addGroup">+Group</Link>
        </button>
      </nav>
    </header>
  );
}
