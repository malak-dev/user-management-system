import React from "react";
import { Link } from "react-router-dom";

export default function Groups(props) {

  return (
    <div>
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
            <td>developers</td>
            <td>20</td>
            <td><button><Link to="/editGroup" ><button >Edit</button></Link></button></td>
            <td><button>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )

}