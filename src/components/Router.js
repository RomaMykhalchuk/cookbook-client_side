import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import DetailedRecipe from "./DetailedRecipe";
import EditRecipe from "./EditRecipe";
import CreateRecipe from "./CreateRecipe";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/recipes/details/:id" component={DetailedRecipe} />
        <Route path="/recipes/update/:id" component={EditRecipe} />
        <Route path="/recipes/new" component={CreateRecipe} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
