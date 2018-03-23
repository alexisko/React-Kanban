import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';

import { moveCard, deleteCard } from '../../actions/cards.js';

import Card from '../../components/Card';

class Column extends Component {
  constructor(props) {
    super(props);

    // functions
    this.handleCardDelete = this.handleCardDelete.bind(this);
    this.handleCardDrag = this.handleCardDrag.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
  }

  handleCardDelete(id) {
    this.props.deleteCard(id);
  }

  handleCardDrag(e, id) {
    e.dataTransfer.setData("text", id);
  }

  handleDrop(e, column) {
    let id = e.dataTransfer.getData("text");
    var data = {
      status: column
    };
    this.props.moveCard(id, data);
  }

  handleDragOver(e) {
    e.preventDefault();
  }

  render() {
    var cards = this.props.cards &&
      this.props.cards.map(card => {
        return (<Card
          key={card.id}
          {...card}
          handleCardDrag={(e) => this.handleCardDrag(e, card.id)}
          handleCardDelete={(e) => this.handleCardDelete(card.id)}
        />);
      });
    return (
      <div
        className="column"
        onDrop={(e) => this.handleDrop(e, this.props.status)}
        onDragOver={this.handleDragOver}
      >
        <h1>{this.props.status}</h1>
        <div className="column__section">
          <div className="column__margin" />
          <div className="column__contents">
            {cards}
          </div>
          <div className="column__margin" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveCard: (id, column) => {
      dispatch(moveCard(id, column));
    },
    deleteCard: (id) => {
      dispatch(deleteCard(id));
    }
  }
}

export default connect(null, mapDispatchToProps)(Column);