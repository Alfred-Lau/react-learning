import React, { Component } from 'react';

export default class Buggy extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  componentDidMount() {
  }
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  render() {
    if (this.state.counter > 5) {
      throw new ReferenceError('reference error');
    }

    return (
      <div>
        <input type="button" onClick={this.handleClick} />
        {this.state.counter}
      </div>
    );
  }
}
