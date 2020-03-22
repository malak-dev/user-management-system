import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'
import { ReactComponent as Logo } from "../logo.jpg";

export default function Header(props) {
  return (
    <header >
      <div className="image">
        <Link to="/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJ4EMs_pr1Dpl8TzCIWHtXToqilKWhhRD-tTOXl_Kh6DMsdjs&s" />

        </Link>
      </div>

      <div className="head">
        <h1> User Management System</h1>
        <br />
        <Link to="/addUser"><button className="button1" type="button" class="btn btn-primary">+User
          </button>
        </Link>
        <Link to="/addGroup">
          <button className="button1" type="button" class="btn btn-primary">+Group
          </button>
        </Link>
      </div>
    </header >
  );
}
