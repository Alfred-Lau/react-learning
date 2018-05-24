import React, { Component } from 'react';

export default class componentName extends Component {
  render() {
    // 缩写为<></>
    return (
      <React.Fragment>
        hello, i am a fragment
        <h2>heading</h2>
      </React.Fragment>
    );
  }
}
