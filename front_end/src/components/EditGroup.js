import React from "react";

export default function EditGroup(props) {
  return (
    <div>
      <p>Enter the group name</p>
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
          Edit
        </button>
      </div>
    </div>
  )

}