import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';

// UTILS
import { getAllCards } from '../../utils/card.js';

// ACTIONS
import { loadCards } from '../../actions/cards.js';
import { logoutUser } from '../../actions/users.js';

// CONTAINERS
import NavDesktop from './NavDesktop';
import Column from '../Column';

class Board extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      cardsLoaded: false
    };

    // functions
    this.sortCards = this.sortCards.bind(this);

    getAllCards().then((cards) => {
      this.props.loadCards(cards.data);
      this.setState({
        cardsLoaded: true
      });
    });
  }

  sortCards(status) {
    return this.props.cards.filter(card => {
      return card.status === status;
    });
  }

  render() {
    if(this.state.cardsLoaded) {
      return(
        <div className="board-desktop">
          <NavDesktop />
          <div className="board-desktop__container">
            <main>
              <Column status='To-Do' cards={this.sortCards('To-Do')} />
              <Column status='In Progress' cards={this.sortCards('In Progress')} />
              <Column status='Done' cards={this.sortCards('Done')} />
            </main>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    cards: state.cards
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: (cards) => {
      dispatch(loadCards(cards));
    },
    logoutUser: () => {
      dispatch(logoutUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);