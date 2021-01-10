import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';

// form
import LoginForm from './component/auth/LoginForm';
import RegisterForm from './component/auth/RegisterForm';
import Dashboard from './component/screen/Dashboard';

export default class App extends Component {
  render() {
    return (
      <Switch>
        
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        
      </Switch>
    )
  }
}
