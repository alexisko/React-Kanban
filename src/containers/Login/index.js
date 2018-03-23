import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { loginUser } from '../../actions/users.js';
import './styles.css';

class Login extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      username: '',
      password: '',
      redirect: false,
      error: ''
    };

    // functions
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value,
      error: ''
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
      error: ''
    });
  }

  handleLogin() {
    var user = {
      username: this.state.username,
      password: this.state.password
    };

    if(user.username === 'test' && user.password === 'test') {
      this.props.loginUser({
        username: user.username
      });
      this.setState({
        redirect: true
      });
    } else {
      this.setState({
        error: 'Error: Wrong username/password! Try again.'
      });
    }
  }

  render() {
    if(this.state.redirect) {
      return(<Redirect to="/board" />);
    }
    return (
      <div className="login">
        <h1>Welcome back!</h1>
        <div className="login__error"><span>{this.state.error}</span></div>
        <label htmlFor="username">Username</label>
        <input
          className="login__input"
          name="username"
          type="text"
          placeholder=""
          onChange={this.handleUsernameChange}
        />
        <label htmlFor="password">Password</label>
        <input
          className="login__input"
          name="password"
          type="password"
          placeholder=""
          onChange={this.handlePasswordChange}
        />
        <input className="login__submit" type="submit" value="Login" onClick={this.handleLogin}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: user => {
      dispatch(loginUser(user));
    }
  }
}

export default connect(null, mapDispatchToProps)(Login);