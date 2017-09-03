import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCard } from '../../actions/Cards.js';

class NewCard extends Component {
  constructor() {
    super();

    // initial state
    this.state = {
      cardTitle: '',
      cardPriority: 'Low',
      cardStatus: 'In Queue',
      createdBy: '',
      assignedTo: ''
    };

    // functions

  }

  handleTitleChange(e) {
    this.setState({
      cardTitle: e.target.value
    });
  }

  handlePriorityChange(e) {
    var priority = document.getElementById('priority').value;
    this.setState({
      cardPriority: priority
    });
  }

  handleStatusChange(e) {
    var status = document.getElementById('status');
    var curStatus = status.options[status.selectedIndex].value;
    this.setState({
      cardStatus: curStatus
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
    console.log("SUBMIT", this.state);
    e.preventDefault();
    this.props.addCard(this.state);
  }

  render() {
    console.log("CUR STATE:", this.state);
    return(
      <form>
        <label>Title:</label>
        <input
          type="text"
          onChange={this.handleTitleChange.bind(this)}
        />

        <br />

        <label>Priority:</label>
        <select
          id="priority"
          onChange={this.handlePriorityChange.bind(this)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <br />

        <label>Status:</label>
        <select
          id="status"
          onChange={this.handleStatusChange.bind(this)}>
          <option value="In Queue">In Queue</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <br />

        <label>Created By:</label>
        <input
          type="text"
          onChange={this.handleCreatedByChange.bind(this)}
        />

        <br />

        <label>Assigned To:</label>
        <input
          type="text"
          onChange={this.handleAssignedToChange.bind(this)}
        />

        <br />

        <button onClick={this.submitCard.bind(this)}>Submit</button>
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