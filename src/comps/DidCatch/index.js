import React, { Component } from 'react';
import { message } from 'antd';

import Header from '../Header';

export default class DidCatch extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidMount() {
    message.loading('loading', 10);
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    // message.error(err, info, this);
  }
  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
