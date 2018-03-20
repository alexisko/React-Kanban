import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { loginUser } from '../../actions/users.js';
import { login } from '../../utils/user.js';
import './styles.css';

class Login extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      username: '',
      password: '',
      redirect: false
    };

    // functions
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin() {
    var user = {
      username: this.state.username,
      password: this.state.password
    };

    if(user.username !== '' && user.password !== '') {
      login(user).then((user) => {
        this.props.loginUser({
          user_id: user.data.user_id,
          username: user.data.username
        });
        this.setState({
          redirect: true
        });
      });
    } else {
      // TODO: ERROR HANDLING
    }
  }

  render() {
    if(this.state.redirect) {
      return(<Redirect to="/board" />);
    }
    return (
      <div className="login">
        <h1>Welcome back!</h1>
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
        <span>New to React-Kanban? <Link to="/signup">Create an account!</Link></span>
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