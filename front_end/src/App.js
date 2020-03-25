import React, { useState, useEffect } from 'react';
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



  const [usersInfo, setUsersInfo] = useState([]);

  const [group, setGroup] = useState([])

  //get all the users
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
  //delete specific user
  function deleteUser(id) {
    axios.delete(`http://localhost:3001/api/users/delete/${id}`)
      .then((response) => {
        console.log(response.data, "delete")
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
    console.log(data)
    axios.post("http://localhost:3001/api/users/new", data)
      .then((response) => {
        getUsers();
        getAllGroups()
      }).catch((err) => {
        console.log(err)
      })

  }

  useEffect(() => {

    getUsers();


  }, []);


  const [groupInfo, setGroupInfo] = useState([]);

  // get all the groups
  function getAllGroups() {
    axios.get("http://localhost:3001/api/groups")
      .then(function (response) {
        console.log("all group", response.data);
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
        console.log(response.data, "delete")
        getAllGroups()
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const addgroup = (name) => {
    const data = {
      name
    }
    console.log(data)
    axios.post("http://localhost:3001/api/groups/new", data)
      .then((response) => {
        getAllGroups();
        console.log("add", response.data)

      }).catch((err) => {
        console.log(err)
      })

  }

  useEffect(() => {

    getAllGroups();


  }, []);


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/addUser">
            <Logo />
            <AddUser groupInfo={groupInfo}
              addUser={addUser} />
          </Route>
          <Route path="/addGroup">
            <Logo />
            <AddGroup addgroup={addgroup} />
          </Route>
          <Route path="/editUser">
            <Logo />
            <EditUser usersInfo={usersInfo} />
          </Route>
          <Route path="/editGroup">
            <Logo />
            <EditGroup />
          </Route>
          <Route path="/group/user">
            <Logo />
            <SpecificUser />
          </Route>
          <Route path="/">
            <Logo />
            <Header />
            <Users
              deleteUser={deleteUser} usersInfo={usersInfo}
            />
            <Groups groupInfo={groupInfo} deleteGroup={deleteGroup}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
