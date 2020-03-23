import React, { useState } from "react";
import './Users.scss'
export default function AddGroup(props) {



  const [name, setName] = useState("")

  const addgroup = (name) => {
    const data = {
      name
    }
    axios.post("/api/groups", data)
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
      <h1>Add a new group</h1>
      <br />
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
        <button type="submit" class="btn btn-primary" onClick={() => addgroup(name)} >
          Add
        </button>
      </div>
    </div>
  )

}