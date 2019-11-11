import React from "react";
import { Switch, Route } from "react-router-dom";

export const MainRoutes = () => (
  <Switch>
    <Route path="/" component={() => <div>hello world!!</div>} />
  </Switch>
);
