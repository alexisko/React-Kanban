import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './styles.css';

// COMPONENTS
import HomePage from '../HomePage';

// CONTAINERS
import Login from '../../containers/Login';
import SignUp from '../../containers/SignUp';

const Home = () => {
  return (
    <div className="home">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Home;


