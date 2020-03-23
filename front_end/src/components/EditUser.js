import React, { useState } from "react";
import './Users.scss'
export default function EditUser(props) {

  const [first_name, setFirst_name] = useState("")
  const [email, setEmail] = useState("")
  const [last_name, setLast_name] = useState("")
  const [birthday, setBirthday] = useState("")
  const [groupName, setGroupName] = useState("")

  return (
    <div className="add">
      <h1>Edit user page</h1>
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
        <p>Move to another group</p>
        <select >
          <option value="1">Group1</option>
          <option value="4">Group2</option>
          <option value="3">Group3</option>
        </select>
        <br />
        <div>
          <button type="submit" class="btn btn-primary">
            Edit
          </button>
        </div>
      </div>
    </div>
  )

}