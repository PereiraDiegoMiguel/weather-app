import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header/Header';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Header />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;