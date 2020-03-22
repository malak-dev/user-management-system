import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'
export default function Header(props) {
  return (
    <header >
      <nav>
        <br />
        <h1> User Management System</h1>
        <br />
        <Link to="/">

          {" "}
          {/* <SpongeLogo /> */}

        </Link>

        <Link to="/addUser"><button className="button1" type="button" class="btn btn-primary">+User
          </button>
        </Link>
        <Link to="/addGroup">
          <button className="button1" type="button" class="btn btn-primary">+Group
          </button>
        </Link>

      </nav>
    </header>
  );
}
