import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { routes } from 'src/Router/index';
import AuthRoute from "./Router/authRoute";
import history from './history';


export default function App(): JSX.Element {
  return (
    <Router history={history}>
      <Switch>
        {routes.map((item, index) => {
          return (
            <AuthRoute key={index} routeData={routes}></AuthRoute>
          );
        })}
      </Switch>
    </Router>
  );
}
