import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Groups from './Groups';
import axios from 'axios'
import "./SpecificUser.scss"

export default function SpecificUsers(props) {

  const { user } = props

  console.log(user, "hiiii")
  return (

    <div className="users">
      <h1>Users Table</h1>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Birthday</th>

          </tr>
        </thead>
        <tbody>
          {user.map(data => (
            <tr key={data.id}>
              <td>{data.first_name}</td>
              <td>{data.last_name}</td>
              <td>{data.email}</td>
              <td>{data.date_of_birth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


  )

}