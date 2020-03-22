import React from "react";
import { Link } from "react-router-dom";
import Groups from './Groups';
import "./Users.scss"
export default function Users(props) {

  return (
    <div className="users">

      <div className="m">
        <h>users table</h>
        <table className="table table-hover">
          <thead className="head">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Date of birth</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>malka</td>
              <td>younso</td>
              <td>malak-y@live.com</td>
              <td>1993-01-01</td>
              <Link to="/editUser" ><td><button type="button" class="btn btn-primary">Edit</button></td></Link>
              <td><button type="button" class="btn btn-primary">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="m">

        <Groups />
      </div>

    </div>
  )

}