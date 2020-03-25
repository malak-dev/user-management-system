import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Groups from './Groups';
import axios from 'axios'
import "./SpecificUser.scss"

export default function SpecificUsers(props) {
  const [user, setUser] = useState([])

  // const getUser = () => {
  //   axios.get(`http://localhost:3001/api/users/${id}`)
  //     .then(function (response) {
  //       setUser(response.data)
  //       console.log(response.data, "users")
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  // useEffect(() => {
  //   getUser()

  // }, []);

  return (

    <div className="table">
      <h1>Users Table</h1>
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

          <tr >
            <td>{}</td>
            <td>younso</td>
            <td>malak-y@live.com</td>
            <td>1993-01-01</td>
            <td><Link to="/editUser" >
              <button type="button" class="btn btn-primary">Edit</button>
            </Link></td>
            <td><button type="button" class="btn btn-primary">Delete</button></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>


  )

}