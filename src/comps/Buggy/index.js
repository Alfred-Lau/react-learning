import React, { Component } from 'react';

export default class Buggy extends Component {
  componentDidMount() {
    throw new ReferenceError('reference error');
  }
  render() {
    return (
      <div>
        buggy
      </div>
    );
  }
}
