import React from "react";
import './Users.scss'
export default function AddGroup(props) {
  return (
    <div className="add">
      <h1>Add a new group</h1>
      <br />
      <div className="form_elements" >
        <div class="form-group">
          <input
            class="form-control"
            name="group_name"
            type="text"
            placeholder="Enter group name"
          // value={first_name}
          // onChange={event => {
          //   setFirst_name(event.target.value);
          //}}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Add
        </button>
      </div>
    </div>
  )

}