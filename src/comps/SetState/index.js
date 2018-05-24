import React, { Component } from 'react';

export default class SetState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'lj',
    };
  }
  componentDidMount() {
    this.handleChange();
  }
  handleChange = () => {
    const updater = (prevState, props) => {
      console.log(prevState, props);
      return {
        ...prevState,
        ...props,
      };
    };
    const cb = () => {
      console.log(this.state);
    };
    this.setState(updater, cb);
  }
  render() {
    return (
      <div>
        setState
      </div>
    );
  }
}
