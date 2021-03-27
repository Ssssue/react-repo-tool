import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { routes } from 'src/Router/index';
import history from './history';


export default function App(): JSX.Element {
  return (
    <Router history={history}>
      <Switch>
        {routes.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              render={props => <item.component {...props} />}
            />
          );
        })}
      </Switch>
    </Router>
  );
}
