import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewCard } from '../../utils/card.js';

class CardNew extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      task: '',
      priority: {value: 'Low'},
      status: {value: 'To-Do'},
      assigned_to: ''
    };

    // functions
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleAssignedToChange = this.handleAssignedToChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTaskChange(e) {
    this.setState({
      task: e.target.value
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

  handleAssignedToChange(e) {
    this.setState({
      assigned_to: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var card = {
      task: this.state.task,
      priority: this.state.priority.value,
      status: this.state.status.value,
      assigned_to: this.state.assigned_to,
      created_by: this.props.users[0].username,
      user_id: this.props.users[0].user_id
    };
    createNewCard(card);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">Task</label>
          <input
            name="task"
            type="text"
            placeholder=""
            onChange={this.handleTaskChange}
          />
          <label htmlFor="priority">Priority</label>
          <select value={this.state.priority} onChange={this.handlePriorityChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <label htmlFor="status">Status</label>
          <select value={this.state.status} onChange={this.handleStatusChange}>
            <option value="To-Do">To-Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <label htmlFor="assigned-to">Assigned To</label>
          <input
            name="assigned-to"
            type="text"
            placeholder=""
            onChange={this.handleAssignedToChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(CardNew);

