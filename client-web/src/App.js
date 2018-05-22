import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
//
import Layout from "./hoc/layout/Layout";
//
import Landing from "./containers/landing/Landing";
//
class App extends Component {
  render() {
    let routes = (
      // <Switch>
      //   <Route path="/login" component={Login} />
      //   <Route path="/register" component={Register} />
      // </Switch>
      <Landing />
    );

    return <Layout>{routes}</Layout>;
  }
}

export default App;
