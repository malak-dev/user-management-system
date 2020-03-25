import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Groups from './Groups';
import "./Users.scss"
import axios from 'axios'


export default function Users(props) {

  const { usersInfo } = props
  console.log(usersInfo, "users")
  return (
    <div className="users">
      <h3>Users table</h3>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Birthday</th>
            <th scope="col">Group</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {usersInfo.map(data => (
            <tr key={data.id}>
              <td>{data.first_name}</td>
              <td>{data.last_name}</td>
              <td>{data.email}</td>
              <td>{data.date_of_birth}</td>
              <td>{data.name}</td>
              <td><Link to={`/editUser/${data.id}`} >
                <button type="button" className="btn btn-primary">Edit</button>
              </Link></td>
              <td><button type="button" className="btn btn-primary" onClick={() => props.deleteUser(data.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}