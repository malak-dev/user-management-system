import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Users.scss"
import axios from 'axios'
import EditGroup from "./EditGroup";

export default function Groups(props) {

  const groupInfo = props.groupInfo
  const deleteGroup = props.deleteGroup


  return (
    <div className="users">
      <h3>Groups table</h3>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Group Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {groupInfo.map(data => (
            <tr key={data.id}>
              <td><Link to="/group/user/" onClick={() => props.getUser(data.id)} >{data.name}</Link></td>
              <td><Link to={`/editGroup/${data.id}`} ><button type="button" class="btn btn-primary"
              >Edit</button></Link></td>

              <td><Link to="/"><button type="button" class="btn btn-primary" onClick={() => props.deleteGroup(data.id)}>Delete</button></Link></td>
            </tr>
          ))}
        </tbody>
      </table>


    </div >
  )

}