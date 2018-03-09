import React, { Component } from 'react';

class Modal extends Component {
  render() {
    if(!this.props.isOpen) {
      return null;
    }

    return (
      <div>
        <h1>Modal</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Modal;