import React from "react";
import './Header.scss'
import { Link } from "react-router-dom";

export default function Logo(props) {

  return (
    <div className="image">
      <Link to="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqJ4EMs_pr1Dpl8TzCIWHtXToqilKWhhRD-tTOXl_Kh6DMsdjs&s" />
      </Link>
    </div>
  )
}