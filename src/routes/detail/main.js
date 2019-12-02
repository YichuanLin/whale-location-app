import React from "react";
import { Switch, Route } from "react-router-dom";
import Detail from "../../views/detail";

export const DetailRoutes = () => (
  <Switch>
    <Route exact path="/detail" component={Detail} />
    <Route exact path="/detail/:id" component={Detail} />
  </Switch>
);
