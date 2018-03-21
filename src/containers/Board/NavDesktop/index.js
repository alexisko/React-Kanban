import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/users.js';
import './styles.css';

// CONTAINERS
import Modal from '../Modal';
import CardNew from '../../CardNew';

class NavDesktop extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      isModalOpen: false
    };

    // functions
    this.handleLogout = this.handleLogout.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleLogout() {
    this.props.logoutUser();
  }

  openModal() {
    this.setState({
      isModalOpen: true
    });
  }

  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  render() {
    return (
      <header>
        <span className="nav-desktop__logo">React-Kanban</span>
        <div className="nav-desktop__nav">
          <button className="nav__new-task" onClick={this.openModal}>New Task</button>
          <Modal isOpen={this.state.isModalOpen}>
            <button className="modal-close__btn" onClick={this.closeModal}>X</button>
            <CardNew closeModal={this.closeModal} />
          </Modal>
          <button className="nav__logout" onClick={this.handleLogout}>Logout</button>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavDesktop);