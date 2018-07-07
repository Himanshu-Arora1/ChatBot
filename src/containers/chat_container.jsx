import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';

import ChatHeader from "../components/chat_header";
import ChatWindow from "../components/chat_window";
import TypingBox from "../containers/typing_box";
import ChatNow from "../containers/chat_now";
import {actionSendMsg} from '../actions';

class ChatContainer extends Component {
  /*
  constructor(props) {
    super(props);

      this.state = {
      userMsg: "",
     }
  }
*/
  
  msgCallback = userMsg => {
/*    this.setState({
      userAllMsgs: [...this.state.userAllMsgs, userMsg]
    }); */

    //console.log('msgcallback ', this.state.userMsg)
    //this.setState({userMsg:userMsg})
    //console.log('msgcallback ', this.state.userMsg)
    console.log('Enter Callback');
    console.log('userMSG',userMsg);
    this.props.actionSendMsg(userMsg);
    console.log('after action');
  };

  render() {
    return (
      <div className="chat-container">
        <Grid id="grid-class">
          <ChatHeader />
          <ChatWindow  userAllMsgs={this.props.userAllMsgs} />
          <TypingBox userMsg={this.msgCallback} />
          <ChatNow />
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ userAllMsgs }) {
  console.log('mapstatetoprops',userAllMsgs);
  return { userAllMsgs };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({actionSendMsg},dispatch);
}
export default connect(
  mapStateToProps,mapDispatchToProps
)(ChatContainer);