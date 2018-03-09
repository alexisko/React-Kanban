import React, { Component } from 'react';

import BoardDesktop from './BoardDesktop';

class Board extends Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      width: window.innerWidth
    }

    // functions
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
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
          <BoardDesktop />
        </div>
      );
    }
  }
}

export default Board;