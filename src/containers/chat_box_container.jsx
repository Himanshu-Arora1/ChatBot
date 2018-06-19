import React, { Component } from "react";
import { Grid } from "react-bootstrap";

import ChatContainer from "./chat_container";
import MainSignUp from "../components/Main_Signup";

export default class ChatBoxContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: true, 
    };
  }

  signupCallback = signedIn => {

    console.log('signedInValue',signedIn);

    this.setState({
      signedIn: signedIn
    });
  };

  render() {

    console.log('enter render')
    console.log('signedin',this.state.signedIn);
        return(
            <Grid>
              {this.state.signedIn ? <ChatContainer signupCallback={this.signupCallback} /> : <MainSignUp />}
            </Grid>
        )
  }
}
