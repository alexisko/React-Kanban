import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditCard extends Component {
  constructor() {
    super();
  }

  handleTitleChange(e) {
    this.setState({
      cardTitle: e.target.value
    });
  }

  handlePriorityChange(e) {
    this.setState({
      cardPriority: e.target.value
    });
  }

  handleStatusChange(e) {
    this.setState({
      cardStatus: e.target.value
    });
  }

  handleCreatedByChange(e) {
    this.setState({
      createdBy: e.target.value
    });
  }

  handleAssignedToChange(e) {
    this.setState({
      assignedTo: e.target.value
    });
  }

  submitCard(e) {
    e.preventDefault();
    this.props.addCard(this.state);

  }

  render() {
    return();
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    editCard: (card) => {
      dispatch(editCard(card));
    }
  };
};

const ConnectedEditCard = connect(
  null,
  mapDispatchToProps
)(EditCard);

export default ConnectedEditCard;