import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { createNewUser } from "../../utils/user.js";
import './styles.css';

class SignUp extends Component {
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
    this.handleSignUp = this.handleSignUp.bind(this);
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

  handleSignUp() {
    var user = {
      username: this.state.username,
      password: this.state.password
    };

    if(user.username !== '' && user.password !== '') {
      createNewUser(user)
        .then(() => {
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
      return (<Redirect to="/login" />);
    }
    return (
      <div className="signup">
        <h1>Create an account</h1>
        <label htmlFor="username">Username</label>
        <input
          className="signup__input"
          name="username"
          type="text"
          placeholder="ex. productivitybot123"
          onChange={this.handleUsernameChange}
        />
        <label htmlFor="password">Password</label>
        <input
          className="signup__input"
          name="password"
          type="password"
          placeholder="******"
          onChange={this.handlePasswordChange}
        />
        <input
          className="signup__submit"
          type="submit"
          onClick={this.handleSignUp}
        />
        <span>Already have an account? Login <Link to="/login">here!</Link></span>
      </div>
    );
  }
}

export default SignUp;