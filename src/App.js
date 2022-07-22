import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from './components/Menu';
import About from './pages/About';
import List from './pages/List';

const App = () => (
  <Router>
    <Menu />
    <Switch>
      <Route path='/' exact component={List} />
      <Route path='/' exact component={About} />
    </Switch>
    <p>Hello world</p>
  </Router>
);

export default App;
