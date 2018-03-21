import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/users.js';
import './styles.css';

// CONTAINERS
import NavDesktop from '../NavDesktop';
import Column from '../../Column';

class BoardDesktop extends Component {
  constructor(props) {
    super(props);

    // functions
    this.sortCards = this.sortCards.bind(this);
  }

  sortCards(status) {
    return this.props.cards.filter(card => {
      return card.status === status;
    });
  }

  render() {
    return (
      <div className="board-desktop">
        <NavDesktop />
        <main>
          <Column status='To-Do' cards={this.sortCards('To-Do')} />
          <Column status='In Progress' cards={this.sortCards('In Progress')} />
          <Column status='Done' cards={this.sortCards('Done')} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardDesktop);