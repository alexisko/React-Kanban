import React, { Component } from 'react';
import { connect } from 'react-redux';

// CONTAINERS
import Columns from '../Columns';
import NewUser from '../NewUser';
import NewCard from '../NewCard';

// COMPONENTS
import Header from '../../components/Header.js';
// import UserList from '../../components/UserList.js';
// import Column from '../../components/Column.js';

// ACTIONS
import { loadCards } from '../../actions/Cards.js';

// REDUCERS
import reducers from '../../reducers';

// CSS
// import logo from '../../logo.svg';
import './App.css';

// CONTAINER
class App extends Component {
  componentWillMount() {
    // load cards from database
    this.props.loadCards();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Columns
            cards={this.props.cards}
          />
        </div>
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
  return {
    loadCards: () => {
      dispatch(loadCards())
    }
  }
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
