import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Main from '../pages/main';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default Routes;
