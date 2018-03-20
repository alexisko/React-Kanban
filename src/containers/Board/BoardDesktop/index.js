import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/users.js';
import './styles.css';

import Modal from '../Modal';
import Column from '../../Column';
import CardNew from '../../CardNew';

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
      <div className="board-desktop">
        <header>
          <h1 className="board-desktop__h1">React-Kanban</h1>
          <div className="board-desktop__nav">
            <button>{this.props.users[0].username}</button>
            <button onClick={this.openModal}>Create New</button>
            <Modal isOpen={this.state.isModalOpen}>
              <CardNew />
              <button onClick={this.closeModal}>Close</button>
            </Modal>
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        </header>
        <main>
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