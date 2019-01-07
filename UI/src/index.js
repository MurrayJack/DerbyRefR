import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import Auth from './Auth/Auth';
import Callback from './Callback/Callback';
import Dashboard from "layouts/Dashboard/Dashboard.jsx";

import "assets/css/material-dashboard-react.css?v=1.5.0";

const auth = new Auth();
const hist = createBrowserHistory();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/home" render={(props) => <div onClick={auth.login}>home</div>} />

      <Route path="/" component={(props) => <Dashboard auth={auth} {...props} />} />

      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} /> 
      }}/>
    </Switch>
  </Router>,
  document.getElementById("root")
);
