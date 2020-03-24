import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

export default function Groups(props) {

  const [groupInfo, setGroupInfo] = useState([]);

  function getAllGroups() {
    axios.get("http://localhost:3001/api/groups")
      .then(function (response) {
        console.log(response.data, "je te test");
        setGroupInfo(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function deleteGroup(id) {
    axios.delete(`http://localhost:3001/api/groups/${id}/delete`)
      .then(function (response) {
        console.log(response.data, "delete")
        getAllGroups()
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  useEffect(() => {

    getAllGroups();


  }, []);

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
          {groupInfo.map(data => (
            <tr key={data.id}>
              <td><Link to="/group/user">{data.name}</Link></td>
              <td>{data.number_of_users}</td>
              <td><Link to="/editgroup" ><button type="button" class="btn btn-primary">Edit</button></Link></td>
              <td><Link to="/"><button type="button" class="btn btn-primary" onClick={() => deleteGroup(data.id)}>Delete</button></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}