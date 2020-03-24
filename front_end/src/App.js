import React, { useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users'
import './App.css';
import Header from './components/Header'
import Group from './components/Groups'
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
  const editGroup = (name, id) => {
    const data = {
      name,

    }
    axios.put(`/api/groups/${id}/update`, data)
      .then((response) => {
        console.log(response)
      }).catch((err) => {
        console.log(err)
      })
      .then(res => {
        console.log(res, "mm")
      })
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/addUser">
            <Logo />
            <AddUser />
          </Route>
          <Route path="/addGroup">
            <Logo />
            <AddGroup />
          </Route>
          <Route path="/editUser">
            <Logo />
            <EditUser />
          </Route>
          <Route path="/editGroup">
            <Logo />
            <EditGroup editGroup={editGroup} />
          </Route>
          <Route path="/group/user">
            <Logo />
            <SpecificUser />
          </Route>
          <Route path="/">
            <Logo />
            <Header />
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
