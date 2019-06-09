import React, { Component } from 'react';
import {  Router,Route, Switch } from 'react-router-dom';
import Homepage from './Container/Homepage';
import Listing from './Container/Listing';
import Confirmation from './Container/Confirmation';
import Web from './Container/Web';

import BasicInfo from './Container/Listing/BasicInfo';
import {history} from './_Config/History';
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
            <Route exact path="/" exact component={Homepage} />
            <Route path="/create" component={Listing} />
            <Route path="/confirm/:bridegroomcd" component={Confirmation} />
            <Route path="/undangkamu/:name" component={Web} />

        </Switch>
      </Router>
    );
  }
}

export default App;
