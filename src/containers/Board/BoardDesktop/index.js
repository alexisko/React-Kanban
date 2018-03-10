import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/users.js';

import Modal from '../Modal';
import Column from '../../Column';

class BoardDesktop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };

    // functions
    this.handleLogout = this.handleLogout.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.sortCards = this.sortCards.bind(this);
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

  sortCards(status) {
    return this.props.cards.filter(card => {
      return card.status === status;
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1>React-Kanban</h1>
          <div>
            <button onClick={this.openModal}>Create New</button>
            <Modal isOpen={this.state.isModalOpen}>
              <button onClick={this.closeModal}>Close</button>
            </Modal>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        </header>
        <main>
          <h1>Desktop</h1>
          <Column status='To-Do' cards={this.sortCards('To-Do')} />
          <Column status='In Progress' cards={this.sortCards('In Progress')} />
          <Column status='Done' cards={this.sortCards('Done')} />
        </main>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BoardDesktop);