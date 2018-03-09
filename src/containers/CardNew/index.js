import React, { Component } from 'react';

class BoardDesktop extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      task: '',
      priority: '',
      status: '',
      assigned_to: ''
    }

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
    })
  }

  handleAssignedToChange(e) {
    this.setState({
      assigned_to: e.target.value
    })
  }

  handleSubmit() {

  }

  render() {
    return (
      <div>
        <label htmlFor="task">Task</label>
        <input
          name="task"
          type="text"
          placeholder=""
          onChange={this.handleTaskChange}
        />
      </div>
    );
  }
}

