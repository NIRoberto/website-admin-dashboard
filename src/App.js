import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Dashboard from "./pages/Dashboard";
import Login from "pages/Login";
import Register from "pages/Register";
import AllProfile from "pages/AllProfile";
import SingleProfile from "pages/SingleProfile";
import UpdateProfile from "pages/UpdateProfile";
import store from "redux/store/store";
import AllBlogPage from "pages/AllBlogPage";
import BlogDetails from "pages/BlogDetails";
import CreatePost from "pages/CreatePost";
import Widgets from "pages/Widgets";

function App() {
  return (
    <Provider store={store}>
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
          <Route exact path="/blogs/">
            <AllBlogPage />
          </Route>
          <Route exact path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route exact path="/blogs/create/:id">
            <CreatePost />
          </Route>
          <Route exact path="/widget">
            <Widgets />
          </Route>
          <Route exact path="*">
            <h1>Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
