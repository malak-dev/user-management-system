import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Groups from './Groups';
import "./Users.scss"
import axios from 'axios'


export default function Users(props) {

  const [usersInfo, setUsersInfo] = useState([]);

  function getUsers() {
    return axios.get('http://localhost:3001/api/users')
      .then(function (response) {
        setUsersInfo(response.data)
        console.log(response.data, "users")
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  function deleteUser(id) {
    axios.delete(`http://localhost:3001/api/users/${id}/delete`)
      .then(function (response) {
        console.log(response.data, "delete")
        getUsers()
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  useEffect(() => {

    getUsers();

  }, []);

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
              {usersInfo.map(data => (
                <tr key={data.id}>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.email}</td>
                  <td>{data.date_of_birth}</td>
                  <td><Link to="/editUser" >
                    <button type="button" className="btn btn-primary">Edit</button>
                  </Link></td>
                  <td><button type="button" className="btn btn-primary" onClick={() => deleteUser(data.id)}>Delete</button></td>
                </tr>
              ))}
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