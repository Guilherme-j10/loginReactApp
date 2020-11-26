import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home';
import Teste from './Teste';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import validate from './validate';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} >
        { validate() == true ? <Redirect to="/home" /> : <App /> }
      </Route>
      <Route path="/home" >
        { validate() == true ? <Home /> : <Redirect to="/" /> }
      </Route>
      <Route path="/teste" >
        { validate() == true ? <Teste /> : <Redirect to="/" /> }
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
