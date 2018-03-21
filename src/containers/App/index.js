import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './styles.css';

// COMPONENTS
import HomePage from '../../components/HomePage';
import ProtectedRoute from '../ProtectedRoute';
import Board from '../Board';

class App extends Component {
  render() {
    return (
      <Switch>
        <ProtectedRoute path="/board" exact component={Board} />
        <Route path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default App;
