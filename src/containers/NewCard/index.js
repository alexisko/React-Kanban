import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCard } from '../../actions/Cards.js';

class NewCard extends Component {
  constructor() {
    super();

    // initial state
    this.state = {
      title: '',
      priority: 'Low', //temp values
      status: 'In Queue', //temp values
      createdBy: '',
      assignedTo: ''
    };

    // functions
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleCreatedByChange = this.handleCreatedByChange.bind(this);
    this.handleAssignedToChange = this.handleAssignedToChange.bind(this);
    this.submitCard = this.submitCard.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  handlePriorityChange(e) {
    this.setState({
      priority: e.target.value
    });
  }

  handleStatusChange(e) {
    this.setState({
      status: e.target.value
    });
  }

  handleCreatedByChange(e) {
    this.setState({
      createdBy: e.target.value
    });
  }

  handleAssignedToChange(e) {
    this.setState({
      assignedTo: e.target.value
    });
  }

  submitCard(e) {
    e.preventDefault();
    this.props.addCard(this.state);
  }

  render() {
    return(
      <form>
        <label>Title:</label>
        <input
          type="text"
          onChange={this.handleTitleChange}
        />

        <br />

        <label>Priority:</label>
        <select
          onChange={this.handlePriorityChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <br />

        <label>Status:</label>
        <select
          onChange={this.handleStatusChange}
        >
          <option value="In Queue">In Queue</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <br />

        <label>Created By:</label>
        <input
          type="text"
          onChange={this.handleCreatedByChange}
        />

        <br />

        <label>Assigned To:</label>
        <input
          type="text"
          onChange={this.handleAssignedToChange}
        />

        <br />

        <button onClick={this.submitCard}>Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => {
      dispatch(addCard(card));
    }
  };
};

const ConnectedNewCard = connect(
  null,
  mapDispatchToProps
)(NewCard);

export default ConnectedNewCard;