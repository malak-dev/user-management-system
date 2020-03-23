import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

export default function Groups(props) {

  function getAllGroups() {

    axios.get("http://localhost:3001/api/groups")
      .then(function (response) {
        console.log(response.data, "je te test");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getAllGroups();
  return (
    <div>
      <h3>Groups table</h3>
      <table className="table table-hover">
        <thead className="head">
          <tr>
            <th scope="col">Group Name</th>
            <th scope="col">Number of user</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Link to="/group/user">developers</Link></td>
            <td>20</td>
            <td><Link to="/editUser" ><button type="button" class="btn btn-primary">Edit</button></Link></td>
            <td><button type="button" class="btn btn-primary">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )

}