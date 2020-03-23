import React, { useState } from "react";
import './Users.scss'
import axios from 'axios'

export default function AddUser(props) {

  const [first_name, setFirst_name] = useState("")
  const [email, setEmail] = useState("")
  const [last_name, setLast_name] = useState("")
  const [birthday, setBirthday] = useState("")
  const [groupName, setGroupName] = useState("")

  const addUser = (first_name, last_name, email, birthday) => {
    let data = {
      first_name,
      last_name,
      email,
      birthday
    }
    console.log(data)
    axios.post("/api/users", data)
      .then((response) => {
        console.log(response)
      }).catch((err) => {
        console.log(err)
      })
      .then(res => {
        console.log(res, "mm")
      })
  }

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
            aria-describedby="emailHelp"
            id="exampleInputEmail1"
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
        <select>
          <option value={groupName}>{groupName}</option>
          <option value="2">Group2</option>
          <option value="3">Group3</option>
        </select>
        <br />
        <div>
          <button type="submit" class="btn btn-primary" onClick={() => addUser(first_name, last_name, email, birthday)}>
            Add
          </button>
        </div>
      </div>
    </div>
  )

}