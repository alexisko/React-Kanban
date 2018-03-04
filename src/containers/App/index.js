import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './styles.css';

// COMPONENTS
import Home from '../../components/Home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
