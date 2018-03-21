import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCards } from '../../utils/card.js';
import { loadCards } from '../../actions/cards.js';


import BoardDesktop from './BoardDesktop';

class Board extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      width: window.innerWidth,
      cardsLoaded: false
    };

    // functions
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);

    getAllCards().then((cards) => {
      this.props.loadCards(cards.data);
      this.setState({
        cardsLoaded: true
      });
    });
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // When changing pages, removes event listener
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    this.setState({
      width: window.innerWidth
    });
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 400 ? true : false;
    if(this.state.cardsLoaded) {
      if(isMobile) {
        return (
          <div>
            <h1>Mobile</h1>
          </div>
        );
      } else {
        return (
          <div>
            <BoardDesktop/>
          </div>
        );
      }
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: (cards) => {
      dispatch(loadCards(cards));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);