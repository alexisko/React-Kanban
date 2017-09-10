import React, { Component } from 'react';
import { connect } from 'react-redux';

import Column from '../../components/Column.js';

class Columns extends Component {
  render() {
    return (
      <div className="row">
          <Column
            cards={this.props.cards.filter((card) => {
              return card.status === 'In Queue';
            })}
            colTitle="In Queue"
          />
          <Column
            cards={this.props.cards.filter((card) => {
              return card.status === 'In Progress';
            })}
            colTitle="In Progress"
          />
          <Column
            cards={this.props.cards.filter((card) => {
              return card.status === 'Done';
            })}
            colTitle="Done"
          />
      </div>
    );
  }
}

export default Columns;