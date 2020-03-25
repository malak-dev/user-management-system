import React, { useState } from "react";
import axios from 'axios'
import './Users.scss'

export default function EditGroup(props) {


  const [name, setName] = useState("")
  console.log(props, "edit")



  return (
    <div className="add">
      <p>Enter the group name</p>

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
        <button type="submit" class="btn btn-primary" onClick={() => props.editGroup(props.id, name)} >
          Edit
        </button>
      </div>

    </div>
  )

}