import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewCard } from '../../actions/cards.js';
import './styles.css';

class CardNew extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      task: '',
      priority: 'Low',
      status: 'To-Do',
      assigned_to: '',
      error: ''
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
      task: e.target.value,
      error: ''
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
      assigned_to: e.target.value,
      error: ''
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var card = {
      task: this.state.task,
      priority: this.state.priority,
      status: this.state.status,
      assigned_to: this.state.assigned_to,
      created_by: this.props.users[0].username,
      user_id: this.props.users[0].user_id
    };

    if(this.state.task !== '' && this.state.assigned_to !== '') {
      this.props.createNewCard(card);
      this.props.closeModal();
    } else {
      this.setState({
        error: 'Error: Fields cannot be empty.'
      });
    }

  }

  render() {
    return (
      <div className="card-new">
        <h1>Create a New Task</h1>
        <div className="error"><span>{this.state.error}</span></div>
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
    users: state.users,
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewCard: (card) => {
      dispatch(createNewCard(card));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardNew);

