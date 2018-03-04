import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      username: '',
      password: ''
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
      console.log('GOOD');
    } else {
      // TODO: ERROR HANDLING
    }
  }

  render() {
    return (
      <div className="sign-up">
        <h1>Create an account</h1>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          placeholder=""
          onChange={this.handleUsernameChange}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder=""
          onChange={this.handlePasswordChange}
        />
        <input
          type="submit"
          onClick={this.handleSignUp}
        />
        <p>Already have an account? Login <Link to="/login">here!</Link></p>
      </div>
    );
  }
}

export default SignUp;