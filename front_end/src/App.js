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
