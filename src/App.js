import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserProvider from "./context/user/UserProvider";
import Navbar from "./components/menu/Menu";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Dashboard />
          </Route>
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
