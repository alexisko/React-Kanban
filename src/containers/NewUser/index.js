import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions/Users.js';

class NewUser extends Component {
  constructor() {
    super();

    // initial state
    this.state = {
      userInput: ''
    };
  }

  handleNewUserInput(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  submitUser() {
    this.props.addUser(this.state.userInput);
  }

  render() {
    return(
      <div>
        <input
          type="text"
          placeholder="New Name"
          onChange={this.handleNewUserInput.bind(this)}
        />
        <button onClick={this.submitUser.bind(this)}>Submit</button>
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