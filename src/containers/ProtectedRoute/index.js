import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class ProtectedRoute extends Component {
  constructor(props) {
    super(props);
    console.log('ProtectedRoute');
    console.log(this.props);
  }

  render() {
    const { component: Component, ...rest} = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          this.props.users.length > 0 ?
          (<Component {...props} />) :
          (<Redirect to='/login' />)
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(ProtectedRoute);