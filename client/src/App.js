import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';

/** Components */
import Login from "./components/auth/Login";
import Register from './components/auth/Register';
import Dashboard from  './components/admin/Dashboard';
import Navbar from './screens/NavBar';
import User from './components/admin/User';
import Employee from './components/admin/Employee';
import Holidays from './components/admin/Holidays';


/** Authenticated route */
import PrivateRoute from './components/auth/AuthenticatedRoute';
import AllEmployeeList from './components/admin/AllEmployeeList';
import LeaveList from './components/admin/LeaveList';

 class App extends Component {
  render() {
    return (
      <Switch>
         
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>

          /** Admin protected route */


          <Navbar />
           <PrivateRoute  exact path="/" component={Dashboard}  />
          <PrivateRoute component={Employee} exact path="/employee"  />
         
          <PrivateRoute component={LeaveList} exact path="/leave-request"  />
          <PrivateRoute component={AllEmployeeList} exact path="/all/employees"  />
          <PrivateRoute component={Holidays} exact path="/holidays"  />

    
          
      </Switch>
    )
  }
}


export default App;