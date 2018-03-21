import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewCard } from '../../utils/card.js';
import './styles.css';

class CardNew extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      task: '',
      priority: 'Low',
      status: 'To-Do',
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
      <div className="card-new">
        <h1>Create a New Task</h1>
        <label htmlFor="task">Task</label>
        <input
          name="task"
          type="text"
          placeholder=""
          onChange={this.handleTaskChange}
        />
        <label htmlFor="priority">Priority</label>
        <div className="card-new__radio">
          <input
            id="low"
            type="radio"
            value="Low"
            onChange={this.handlePriorityChange}
            checked={this.state.priority === 'Low'}
          />
          <label htmlFor="low">Low</label>
          <input
            id="medium"
            type="radio"
            value="Medium"
            onChange={this.handlePriorityChange}
            checked={this.state.priority === 'Medium'}
          />
          <label htmlFor="medium">Medium</label>
          <input
            id="high"
            type="radio"
            value="High"
            onChange={this.handlePriorityChange}
            checked={this.state.priority === 'High'}
          />
          <label htmlFor="high">High</label>
        </div>
        <label htmlFor="status">Status</label>
        <div className="card-new__radio">
          <input
            id="todo"
            type="radio"
            value="To-Do"
            onChange={this.handleStatusChange}
            checked={this.state.status === 'To-Do'}
          />
          <label htmlFor="todo">To-Do</label>
          <input
            id="inprogress"
            type="radio"
            value="In Progress"
            onChange={this.handleStatusChange}
            checked={this.state.status === 'In Progress'}
          />
          <label htmlFor="inprogress">In Progress</label>
          <input
            id="done"
            type="radio"
            value="Done"
            onChange={this.handleStatusChange}
            checked={this.state.status === 'Done'}
          />
          <label htmlFor="done">Done</label>
        </div>
        <label htmlFor="assigned-to">Assigned To</label>
        <input
          name="assigned-to"
          type="text"
          placeholder=""
          onChange={this.handleAssignedToChange}
        />
        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
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

