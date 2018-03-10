import React, { Component } from 'react';
import { getAllCards } from '../../utils/card.js';

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

    getAllCards()
      .then((cards) => {
        this.setState({
          cardsLoaded: true,
          cards: cards.data
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
            <BoardDesktop cards={this.state.cards}/>
          </div>
        );
      }
    } else {
      return null;
    }
  }
}

export default Board;