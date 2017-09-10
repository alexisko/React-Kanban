import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions/Users.js';

class NewUser extends Component {
  constructor() {
    super();

    // initial state
    this.state = {
      username: '',
      password: ''
    };

    // functions
    this.handleNewUsername = this.handleNewUsername.bind(this);
    this.handleNewPassword = this.handleNewPassword.bind(this);
    this.submitUser = this.submitUser.bind(this);
  }

  handleNewUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleNewPassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  submitUser() {
    this.props.addUser(this.state.username);
  }

  render() {
    return(
      <div>
        <input
          type="text"
          placeholder="username"
          onChange={this.handleNewUsername}
        />
        <input
          type="text"
          placeholder="password"
          onChange={this.handleNewPassword}
        />
        <button onClick={this.submitUser}>Submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch(addUser(user));
    }
  };
};

const ConnectedNewUser = connect(
  null,
  mapDispatchToProps
)(NewUser);

export default ConnectedNewUser;