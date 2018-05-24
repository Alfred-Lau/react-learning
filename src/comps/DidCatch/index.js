import React, { Component } from 'react';
import { message } from 'antd';

import Header from '../Header';

export default class DidCatch extends Component {
  componentDidMount() {
    message.loading('loading', 10);
  }
  componentDidCatch(err, info) {
    message.error(err, info, this);
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
