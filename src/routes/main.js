import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../views/home";
import FullInfo from "../views/full-info";
import Detail from "../views/detail";

export const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/full-info" component={FullInfo} />
    <Route exact path="/detail/:id" component={Detail} />
  </Switch>
);
