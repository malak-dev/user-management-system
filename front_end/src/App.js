import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Users from './components/Users'
import './App.css';
import Header from './components/Header'
import Group from './components/Groups'
import AddGroup from './components/AddGroup'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
//import EditGroup from './components/EditGroup'
import SpecificUser from './components/SpecificUser'
import { ReactComponent as Logo } from "./logo.jpg";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import EditGroup from './components/EditGroup';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/addUser">
            <Header />
            <AddUser />
          </Route>
          <Route path="/addGroup">
            <AddGroup />
          </Route>
          <Route path="/editUser">
            <EditUser />
          </Route>
          <Route path="/editGroup">
            <EditGroup />
          </Route>
          <Route path="/group/user">
            <SpecificUser />
          </Route>
          <Route path="/">
            <Header />
            <br />
            <Users />

          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
