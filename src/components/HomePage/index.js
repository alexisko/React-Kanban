import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const HomePage = () => {
  return (
    <div className="home">
      <h1>REACT-KANBAN</h1>
      <Link to="/login">Login</Link>
      <Link to="/signup">SignUp</Link>
    </div>
  );
}

export default HomePage;