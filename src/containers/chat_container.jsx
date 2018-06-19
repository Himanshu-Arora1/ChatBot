import React, { Component } from "react";
import { Grid } from "react-bootstrap";

import ChatHeader from "../components/chat_header";
import ChatWindow from "../components/chat_window";
import TypingBox from "../containers/typing_box";
import ChatNow from "../containers/chat_now";

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userMsg: "",
      signedIn: false,
      userAllMsgs: []
    };
  }

  msgCallback = userMsg => {
    this.setState({
      userAllMsgs: [...this.state.userAllMsgs, userMsg]
    });

    console.log("user message", userMsg);
  };

  signUpCallback = signedIn => {
    console.log('ener 1 and signupcall');
    this.props.signupCallback(this.state.signedIn)
  };

  render() {
    
    return(
        <div className="chat-container">
          <Grid id="grid-class">
            <ChatHeader />
            <ChatWindow chat={this.state.userAllMsgs} />
            <TypingBox userMsg={this.msgCallback} />
            <ChatNow signUpCall={this.signUpCallback} />
          </Grid>
        </div>
    )
  }
}
