import React from "react";
import { Link } from "react-router-dom";
import Groups from './Groups';
import "./Users.scss"
export default function Users(props) {

  return (
    <div className="users">
      <main>
        <section>
          <h3>Users table</h3>
          <table className="table table-hover">
            <thead className="head">
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Birthday</th>
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
                <td><Link to="/editUser" >
                  <button type="button" class="btn btn-primary">Edit</button>
                </Link></td>
                <td><button type="button" class="btn btn-primary">Delete</button></td>
              </tr>
            </tbody>
          </table>

        </section>
        <section>
          <Groups />
        </section>
      </main>

    </div>
  )

}