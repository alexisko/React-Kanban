import React, { Component } from 'react';
import './styles.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
          <p>{this.props.task}</p>
          <p>Priority: {this.props.priority}</p>
          <p>Assigned By: {this.props.created_by}</p>
          <p>Assigned to: {this.props.assigned_to}</p>
      </div>
    );
  }
}

export default Card;