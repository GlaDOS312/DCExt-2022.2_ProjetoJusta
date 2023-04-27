import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from '../react-axios/dashboard';
import Cadastro from '../react-axios/cadastro';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/cadastro" component={Cadastro} />
      </Switch>
    </Router>
  );
}

export default App;