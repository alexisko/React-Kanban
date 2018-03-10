import React, { Component } from 'react';
import './styles.css';

import Card from '../Card';

class Column extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var cards = this.props.cards &&
      this.props.cards.map(card => {
        return (<Card
          key={card.id}
          task={card.task}
          priority={card.priority}
          created_by={card.created_by}
          assigned_to={card.assigned_to}
        />);
      });
    return (
      <div className="column">
        <h1>{this.props.status}</h1>
        <div className="column__section">
            {cards}
        </div>
      </div>
    );
  }
}

export default Column;