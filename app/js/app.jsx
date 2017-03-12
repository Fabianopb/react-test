import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Layout from './views/Layout';
import Home from './views/Home';
import About from './views/About';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Redirect from='/' to='/home' />
    <Route path='/' component={ Layout }>
      <Route path='home' component={ Home } />
      <Route path='about' component={ About } />
    </Route>
  </Router>,
  document.getElementById('app'),
);
