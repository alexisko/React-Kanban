import React, { Component } from 'react';
import './styles.css';

class Modal extends Component {
  render() {
    if(!this.props.isOpen) {
      return null;
    }

    return (
      <div className="modal__backdrop">
        <div className="modal__main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;