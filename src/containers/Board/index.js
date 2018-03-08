import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/users.js';

class Board extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      width: window.innerWidth
    }

    // functions
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // When changing pages, removes event listener
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange() {
    this.setState({
      width: window.innerWidth
    });
  }

  handleLogout() {
    this.props.logoutUser();
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 400 ? true : false;
    if(isMobile) {
      return (
        <div>
          <h1>Mobile</h1>
        </div>
      );
    } else {
      return (
        <div>
          <header>
            <span>React-Kanban</span>
            <div>
              <button onClick={this.handleLogout}>Logout</button>
            </div>
          </header>
          <main>
            <h1>Desktop</h1>
          </main>
        </div>
      );
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Board);