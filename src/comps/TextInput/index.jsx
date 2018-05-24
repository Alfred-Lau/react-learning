import React, { Component } from 'react';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  testRef = () => {
    console.log('the child ref is called');
  }
  render() {
    const { type } = this.props;
    return (
      <div>
        <input type={type} />
      </div>
    );
  }
}
