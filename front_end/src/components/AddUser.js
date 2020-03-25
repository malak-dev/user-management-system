import React, { useState } from "react";
import './Users.scss'
import axios from 'axios'
import { Link } from "react-router-dom";

export default function AddUser(props) {

  const [first_name, setFirst_name] = useState("")
  const [email, setEmail] = useState("")
  const [last_name, setLast_name] = useState("")
  const [birthday, setBirthday] = useState("")

  const { groupInfo } = props

  const [group_id, setGroupid] = useState("")



  return (
    <div className="add">
      <h1>Add a new user</h1>
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
            value={birthday}
            onChange={event => {
              setBirthday(event.target.value);
            }}
          />
        </div>
        <p> choose group</p>
        <select name="group_id" value={group_id}
          onChange={event => { setGroupid(event.target.value); }}>
          {groupInfo.map(data => (
            <option value={data.id}>{data.name}</option>
          ))}
        </select>
        <br />
        <Link to="/"> <button type="submit" class="btn btn-primary" onClick={() => props.addUser(first_name, last_name, email, birthday, group_id)}>
          Add
          </button></Link>
      </div>
    </div >
  )

}