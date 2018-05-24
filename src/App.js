import React, { Component } from 'react';
import 'antd/dist/antd.css';

import './App.css';
import Header from './comps/Header';
import Fragment from './comps/Fragment';
import Render from './comps/Render';
import SetState from './comps/SetState';
import DidCatch from './comps/DidCatch';
import Buggy from './comps/Buggy';


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header>
          <div className="wrapper">
            <span>logo</span>
          </div>
          <ul>
            <li>name</li>
            <li>age</li>
            <li>gender</li>
          </ul>
        </Header>
        <Fragment />
        <Render />
        <SetState name="ouye" />
        <DidCatch>
          <Buggy />
        </DidCatch>
      </div>
    );
  }
}

export default App;
