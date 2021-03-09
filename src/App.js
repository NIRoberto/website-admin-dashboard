import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "pages/Login";
import Register from "pages/Register";
import AllProfile from "pages/AllProfile";
import SingleProfile from "pages/SingleProfile";
import UpdateProfile from "pages/UpdateProfile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/users">
          <AllProfile />
        </Route>
        <Route exact path="/user/profile">
          <SingleProfile />
        </Route>
        <Route exact path="/user/profile/update">
          <UpdateProfile />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
