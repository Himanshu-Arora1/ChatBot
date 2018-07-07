import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { connect } from "react-redux";

import ChatContainer from "./chat_container";
import MainSignUp from "../components/Main_Signup";

class ChatBoxContainer extends Component {
  render() {
    return (
      <Grid>
        {this.props.signedInState ? <ChatContainer /> : <MainSignUp />}
      </Grid>
    );
  }
}

//Anything will return from this function will end up as props in chat box container
function mapStateToProps({ signedInState }) {
  return { signedInState };
}

export default connect(mapStateToProps)(ChatBoxContainer);
