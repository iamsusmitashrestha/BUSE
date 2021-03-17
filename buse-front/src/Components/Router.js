import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IndexPage from "../Pages/IndexPage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import HomeRouter from "../Pages/HomeRouter";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={IndexPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/home" component={HomeRouter} />
      </Switch>
    </BrowserRouter>
  );
}
