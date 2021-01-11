import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';

// component
import Login from './Component/auth/Login';
import Register from './Component/auth/Register';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        
      </Switch>
    )
  }
}
