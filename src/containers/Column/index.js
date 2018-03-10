import React, { Component } from 'react';
import './styles.css';

import Card from '../Card';

class Column extends Component {
  constructor(props) {
    super(props);
    console.log('column');
  }

  render() {
    var cards = this.props.cards &&
      this.props.cards.map(card => {
        return <Card task={card.task} />;
      });
    return (
      <div className="column">
        <h1>Column</h1>
          {cards}
      </div>
    );
  }
}

export default Column;