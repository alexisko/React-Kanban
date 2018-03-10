import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div className="card">
        <h1>Card</h1>
          <p>{this.props.task}</p>
      </div>
    );
  }
}

export default Card;