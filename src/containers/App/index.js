import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './styles.css';

// COMPONENTS
import HomePage from '../../components/HomePage';
import ProtectedRoute from '../ProtectedRoute';
import Login from '../Login';
import SignUp from '../SignUp';
import Board from '../Board';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <ProtectedRoute path="/board" component={Board} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
