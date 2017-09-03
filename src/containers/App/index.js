import React, { Component } from 'react';
import { connect } from 'react-redux';

// CONTAINERS
import NewUser from '../NewUser';
import NewCard from '../NewCard';

// COMPONENTS
import UserList from '../../components/UserList.js';
import Column from '../../components/Column.js';

// ACTIONS
import { addUser } from '../../actions/Users.js';

// CSS
import logo from '../../logo.svg';
import './App.css';

// CONTAINER
class App extends Component {
  render() {

    const inQueue = this.props.cards.filter((card) => {
      return card.cardStatus === 'In Queue';
    });

    const inProgress = this.props.cards.filter((card) => {
      return card.cardStatus === 'In Progress';
    });

    const done = this.props.cards.filter((card) => {
      return card.cardStatus === 'Done';
    });

    return (
      <div>
        <h1>USERS</h1>

        <UserList
          users={this.props.users} // comes from state store
        />

        <h2>NEW USER FORM</h2>

        <NewUser />

        <h1>COLUMNS</h1>

        <Column
          cards={inQueue}
        />

        <hr />

        <Column
          cards={inProgress}
        />

        <hr />

        <Column
          cards={done}
        />

        <h2>NEW CARD FORM</h2>

        <NewCard />
      </div>
    );
  }
}

// state here is referencing the store / state = store
const mapStateToProps = (state) => {
  return {
    users: state.users,
    cards: state.cards
  };
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
