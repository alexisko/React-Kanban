import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './styles.css';

import Login from '../../containers/Login';

const HomePage = ({ match }) => {
  return (
    <div className="home-page">
      <div className="home-page__container">
        <div className="home-page__container--left">
          <div className="home-page__shapes">
            <div className="home-page__shapes--sml-circle" />
            <div className="home-page__shapes--container">
              <div className="home-page__shapes--square"/>
              <div className="home-page__shapes--circle"/>
            </div>
          </div>
          <h1>REACT-KANBAN</h1>
          <div className="orange-line" />
          <span>Lorem ipsum dolor amet tofu typewriter keytar, selfies listicle migas hot chicken cardigan knausgaard cred letterpress art party glossier brunch microdosing.</span>
        </div>
        <div className="home-page__container--right">
          <Switch>
            <Route path={`${match.path}`} exact component={Login} />
            <Redirect to={`${match.url}`} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default HomePage;