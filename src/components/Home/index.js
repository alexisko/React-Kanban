import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './styles.css';

// COMPONENTS
import HomePage from '../HomePage';

// CONTAINERS
import ConnectedLogin from '../../containers/Login';
import SignUp from '../../containers/SignUp';

const Home = () => {
  return (
    <div className="home">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={ConnectedLogin} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </div>
  );
}

export default Home;


