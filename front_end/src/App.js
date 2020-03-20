import React from 'react';

import Users from './components/Users'
import './App.css';
import Header from './components/Header'
import Group from './components/Groups'
import AddGroup from './components/AddGroup'
import AddUser from './components/AddUser'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
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
          <Route path="/">
            <Header />
            <Users />
            <Group />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
