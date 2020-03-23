import React, { useState } from "react";
import axios from 'axios'

export default function EditGroup(props) {
  const [name, setName] = useState("")


  const editGroup = (name, id) => {
    const data = {
      name,
      id
    }
    axios.put(`/api/groups/${id}/update`, data)
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
    <div>
      <p>Enter the group name</p>
      <div className="form_elements" >
        <div class="form-group">
          <input
            class="form-control"
            name="group_name"
            type="text"
            placeholder="Enter group name"
            value={name}
            onChange={event => {
              setName(event.target.value);
            }}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={() => editGroup(name, id)} >
          Edit
        </button>
      </div>
    </div>
  )

}