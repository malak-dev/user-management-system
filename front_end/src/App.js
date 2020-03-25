import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users'
import './App.css';
import Header from './components/Header'
import Groups from './components/Groups'
import AddGroup from './components/AddGroup'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import SpecificUser from './components/SpecificUser'
import Logo from './components/Logo'
import EditGroup from './components/EditGroup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {


  const [user, setUser] = useState([])
  const [usersInfo, setUsersInfo] = useState([]);
  const [groupInfo, setGroupInfo] = useState([]);

  //get all the users
  function getUsers() {
    return axios.get('http://localhost:3001/api/users')
      .then(function (response) {
        setUsersInfo(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  //delete a specific user
  function deleteUser(id) {

    axios.delete(`http://localhost:3001/api/users/${id}/delete`)
      .then((response) => {
        getUsers()
        getAllGroups()
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  // add a new user
  const addUser = (first_name, last_name, email, birthday, group_id) => {
    let data = {
      first_name,
      last_name,
      email,
      birthday,
      group_id
    }

    axios.post("http://localhost:3001/api/users/new", data)
      .then((response) => {
        getUsers();
        getAllGroups()
      }).catch((err) => {
        console.log(err)
      })

  }
  // edit user 
  const editUser = (first_name, last_name, email, date_of_birth, category, id) => {
    const data = {
      first_name,
      last_name,
      email,
      date_of_birth,
      category
    }

    axios.put(`http://localhost:3001/api/users/${id}/update`, data)
      .then(function (response) {
        getUsers();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {

    getUsers();


  }, []);


  // get all the groups
  function getAllGroups() {
    axios.get("http://localhost:3001/api/groups")
      .then(function (response) {
        setGroupInfo(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // delete a specific group
  function deleteGroup(id) {
    axios.delete(`http://localhost:3001/api/groups/${id}/delete`)
      .then(function (response) {
        getAllGroups()
        getUsers()
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  // add a new group
  const addgroup = (name) => {
    const data = {
      name
    }

    axios.post("http://localhost:3001/api/groups/new", data)
      .then((response) => {
        getAllGroups();

      }).catch((err) => {
        console.log(err)
      })

  }
  //edit group
  const editGroup = (id, name) => {
    const data = {
      name,
      id
    }

    axios.put(`http://localhost:3001/api/groups/${id}/update`, data)
      .then(function (response) {
        getAllGroups();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // get specific user
  const getUser = (id) => {
    axios.get(`http://localhost:3001/api/users/${id}`)
      .then(function (response) {
        setUser(response.data)

      })
      .catch(function (error) {
        console.log(error);
      });
  }


  useEffect(() => {

    getAllGroups();
    getUser()

  }, []);


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/addUser">
            <Logo />
            <br />
            <AddUser groupInfo={groupInfo}
              addUser={addUser} />
          </Route>
          <Route path="/addGroup">
            <Logo />
            <br />
            <AddGroup addgroup={addgroup} />
          </Route>
          <Route path="/editUser/:id" >
            <Logo />
            <br />
            <EditUser groupInfo={groupInfo} editUser={editUser} />
          </Route>
          <Route path="/editGroup/:id" >
            <Logo />
            <br />
            <EditGroup editGroup={editGroup} />
          </Route>
          <Route path="/group/user">
            <Logo />
            <br />
            <SpecificUser user={user} />
          </Route>
          <Route path="/">
            <Logo />
            <Header />
            <Users
              deleteUser={deleteUser} usersInfo={usersInfo}
            />
            <Groups groupInfo={groupInfo} deleteGroup={deleteGroup} getUser={getUser} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
