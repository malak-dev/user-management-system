import React, { useState, useEffect } from "react";
import axios from 'axios'
import './Users.scss'
import Logo from './Logo'
import './Header.scss'
import { Link } from "react-router-dom";

export default function EditGroup(props) {


  const [name, setName] = useState("")
  console.log(props, "edit")

  const editGroup = (id, name) => {
    const data = {
      name,
      id
    }
    console.log(data)
    axios.put(`http://localhost:3001/api/groups/${id}/update`, data)
      .then(function (response) {

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {

    editGroup()


  }, []);

  return (

    <div className="add">
      <Logo />
      <p>Enter the group name</p>

      <h>{props.match.params.id}</h>
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
        <Link to="/"> <button type="submit" class="btn btn-primary" onClick={() => editGroup(props.match.params.id, name)} >
          Edit
        </button></Link>
      </div>

    </div>
  )

}