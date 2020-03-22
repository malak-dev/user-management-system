import React from "react";
import './Users.scss'
export default function AddUser(props) {
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
          // value={first_name}
          // onChange={event => {
          //   setFirst_name(event.target.value);
          // }}
          />
        </div>
        <div class="form-group">

          <input
            class="form-control"
            name="last_name"
            type="text"
            placeholder="Enter user last name"
          // value={last_name}
          // onChange={event => {
          //   setLast_name(event.target.value);
          // }}
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
          // value={email}
          // onChange={event => {
          //   setEmail(event.target.value);
          // }}
          />
        </div>
        <div class="form-group">

          <input
            class="form-control"
            name="date_of_birth"
            type="text"
            placeholder="Enter the date of birth"
          // value={password}
          // onChange={event => {
          //   setPassword(event.target.value);
          // }}
          />
        </div>
        <select >
          <option value="1">Group1</option>
          <option value="4">Group2</option>
          <option value="3">Group3</option>
        </select>
        <br />
        <div>
          <button type="submit" class="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    </div>
  )

}