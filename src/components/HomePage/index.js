import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page__title">
        <span className="home-page__welcome">Welcome to,</span>
        <h1>REACT-KANBAN</h1>
        <span className="home-page__desc">Your online tool for getting sh*t done!</span>
      </div>

      <div className="home-page__nav">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/signup"><button>SignUp</button></Link>
      </div>
    </div>
  );
}

export default HomePage;