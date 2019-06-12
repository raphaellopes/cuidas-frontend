// vendors
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// locals
import Home from './pages/home';
import Appointments from './pages/appointments';
import Admin from './pages/admin';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/agendamentos" component={Appointments} />
      <Route exact path="/administracao" component={Admin} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
