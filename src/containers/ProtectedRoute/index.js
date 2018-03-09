import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class ProtectedRoute extends Component {
  render() {
    const { component: Component, ...rest} = this.props;

    if(this.props.users.length > 0) {
      return (
        <Component {...this.props} />
      );
    } else {
      return (
        <Redirect to='/login' />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(ProtectedRoute);