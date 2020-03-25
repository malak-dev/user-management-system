import React, { useState, useEffect } from "react";
import axios from 'axios'
import './Users.scss'
import './Header.scss'
import { Link, useParams } from "react-router-dom";

export default function EditGroup(props) {


  const [name, setName] = useState("")
  console.log(props, "edit")


  const { id } = useParams();
  console.log(id, "kkkk")

  return (

    <div className="add">

      <h2>Edit group ingromation</h2>
      <br />
      <div className="form_elements" >
        <div class="form-group">
          <input
            class="form-control"
            name="group_name"
            type="text"
            placeholder={props.name}
            value={name}
            onChange={event => {
              setName(event.target.value);
            }}
          />
        </div>
        <Link to="/"> <button type="submit" class="btn btn-primary" onClick={() => props.editGroup(id, name)} >
          Edit
        </button></Link>
      </div>

    </div>
  )

}