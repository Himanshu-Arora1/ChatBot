import React, { Component } from 'react';
import ChatBox from './chatBox';
import ChatBoxSupport from './chatBox_Support';

export default class App extends Component {
  render() {
    return (
      <div>
        <ChatBox />
        <ChatBoxSupport />
      </div>
    );
  }
}
