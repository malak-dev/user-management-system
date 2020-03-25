import React, { useState } from "react";
import './Users.scss'
import axios from 'axios'
import { Link, useParams } from "react-router-dom";
export default function EditUser(props) {

  const [first_name, setFirst_name] = useState("")
  const [email, setEmail] = useState("")
  const [last_name, setLast_name] = useState("")
  const [date_of_birth, setDate_of_birth] = useState("")
  const [category, setCategory] = useState("")



  const { id } = useParams();

  const { groupInfo } = props

  return (

    <div className="add">

      <h2>Edit user information</h2>
      <br />
      <div className="form_elements" >
        <div class="form-group">
          <input
            class="form-control"
            name="first_name"
            type="text"
            placeholder="Enter user first name"
            value={first_name}
            onChange={event => {
              setFirst_name(event.target.value);
            }}
          />
        </div>
        <div class="form-group">

          <input
            class="form-control"
            name="last_name"
            type="text"
            placeholder="Enter user last name"
            value={last_name}
            onChange={event => {
              setLast_name(event.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            name="email"
            type="email"
            placeholder="Enter user email"
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            name="date_of_birth"
            type="text"
            placeholder="Enter the date of birth"
            value={date_of_birth}
            onChange={event => {
              setDate_of_birth(event.target.value);
            }}
          />
        </div>
        <p>Move to another group</p>

        <select name="category" value={category}
          onChange={event => { setCategory(event.target.value); }}>
          {groupInfo.map(data => (
            <option value={data.id}>{data.name}</option>
          ))}
        </select>

        <br />
        <div>
          <Link to="/"><button type="submit" class="btn btn-primary" onClick={() => props.editUser(first_name, last_name, email, date_of_birth, category, id)}>
            Edit
          </button></Link>
        </div>
      </div>
    </div>
  )

}