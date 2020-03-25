import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Users.scss"
import axios from 'axios'
import EditGroup from "./EditGroup";

export default function Groups(props) {

  const groupInfo = props.groupInfo
  const deleteGroup = props.deleteGroup

  const editGroup = (id, name) => {
    const data = {
      name,
      id
    }
    console.log(data)
    axios.put(`http://localhost:3001/api/groups/${id}/update`, data)
      .then(function (response) {

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {


  }, []);


  return (
    <div className="users">
      <main>
        <section>
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
              {groupInfo.map(data => (
                <tr key={data.id}>
                  <td><Link to="/group/user">{data.name}</Link></td>
                  <td>{data.number_of_users}</td>
                  <td><Link to="/editgroup" ><button type="button" class="btn btn-primary">Edit</button></Link></td>

                  <td><Link to="/"><button type="button" class="btn btn-primary" onClick={() => props.deleteGroup(data.id)}>Delete</button></Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )

}