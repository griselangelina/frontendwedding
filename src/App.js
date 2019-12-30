import React, { Component } from 'react';
import {  Router,Route, Switch } from 'react-router-dom';
import Homepage from './Container/Homepage';
import Listing from './Container/Listing';
import Confirmation from './Container/Confirmation';
import Web from './Container/Web';
import Login from './Container/Login';
import Register from './Container/Register';
import ChangePassword from './Container/ChangePassword';
import ForgotPassword from './Container/ForgotPassword';

import BasicInfo from './Container/Listing/BasicInfo';
import UserService from './Service/UserService';


import {history} from './_Config/History';
class App extends Component {
  componentDidMount(){
    console.log("UserService.currentUser",UserService.currentUserValue)
    if(UserService.currentUserValue){
     UserService.isUserActive(UserService.currentUserValue);
    }
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
            <Route exact path="/" exact component={Homepage} />
            <Route exact path="/create" component={Listing} />
            <Route exact path="/confirm/:bridegroomcd" component={Confirmation} />
            <Route exact path="/undangkamu/:name" component={Web} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgotPassword" component={ForgotPassword} />
            <Route exact path="/changepassword" component={ChangePassword} />

        </Switch>
      </Router>
    );
  }
}

export default App;
