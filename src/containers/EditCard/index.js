import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editCard } from '../../actions/Cards.js';

class EditCard extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      id: props.id,
      title: props.title,
      priority: props.priority,
      status: props.status,
      createdBy: props.createdBy,
      assignedTo: props.assignedTo
    };

    // functions
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleCreatedByChange = this.handleCreatedByChange.bind(this);
    this.handleAssignedToChange = this.handleAssignedToChange.bind(this);
    this.submitEditCard = this.submitEditCard.bind(this);
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

  submitEditCard(e) {
    e.preventDefault();
    console.log("BUTTON", this.state);
    this.props.editCard(this.state);
  }

  render() {
    return(
      <form>
        <label>Title:</label>
        <input
          type="text"
           value={this.state.title}
          onChange={this.handleTitleChange}
        />

        <br />

        <label>Priority:</label>
        <select
          id="priority"
          value={this.state.priority}
          onChange={this.handlePriorityChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <br />

        <label>Status:</label>
        <select
          id="status"
          value={this.state.status}
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
          value={this.state.createdBy}
          onChange={this.handleCreatedByChange}
        />

        <br />

        <label>Assigned To:</label>
        <input
          type="text"
          value={this.state.assignedTo}
          onChange={this.handleAssignedToChange}
        />

        <br />

        <button onClick={this.submitEditCard}>Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editCard: (card) => {
      dispatch(editCard(card));
    }
  };
};

const ConnectedEditCard = connect(
  null,
  mapDispatchToProps
)(EditCard);

export default ConnectedEditCard;