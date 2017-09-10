import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditCard from '../EditCard';

import { deleteCard } from '../../actions/Cards.js';

class Card extends Component {
  constructor(props) {
    super(props);

    // functions
    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
  }

  handleEditButton() {

  }

  handleDeleteButton(e) {
    e.preventDefault();
    this.props.deleteCard(this.props);
  }

  render() {
    return (
      <div>
        <div className="alert alert-warning">
          <p>Title: {this.props.title}</p>
          <p>Priority: {this.props.priority}</p>
          <p>Created By: {this.props.createdBy}</p>
          <p>Assigned To: {this.props.assignedTo}</p>
          <button onClick={this.handleEditButton}>Edit</button>
          <button onClick={this.handleDeleteButton}>Delete</button>
        </div>
        <EditCard
          id={this.props.id}
          title={this.props.title}
          priority={this.props.priority}
          status={this.props.status}
          createdBy={this.props.createdBy}
          assignedTo={this.props.assignedTo}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (card) => {
      dispatch(deleteCard(card));
    }
  }
}

const ConnectedCard = connect(
  null,
  mapDispatchToProps
)(Card);

export default ConnectedCard;