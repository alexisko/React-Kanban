import React, { Component } from 'react';
import './styles.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className={this.props.priority}>
        </div>
        <div className="card__content">
          <span className="card__task">{this.props.task}</span>
          <hr />
          <span>Assigned By: {this.props.created_by}</span>
          <div className="card__footer">
            <span>Priority: {this.props.priority}</span>
            <span>{this.props.assigned_to}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;