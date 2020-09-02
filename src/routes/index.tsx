import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashbord from '../pages/Dashbord';
import Details from '../pages/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashbord} />
    <Route path="/Details/:pokemon+" component={Details} />
  </Switch>
);

export default Routes;
