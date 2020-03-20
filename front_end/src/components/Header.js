import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header >
      <nav>
        <h1> User Management System</h1>
        <Link to="/">

          {" "}
          {/* <SpongeLogo /> */}

        </Link>

        <Link to="/addUser"><button type="button" class="btn btn-primary">+User
          </button>
        </Link>
        <Link to="/addGroup">
          <button type="button" class="btn btn-primary">+Group
          </button>
        </Link>

      </nav>
    </header>
  );
}
