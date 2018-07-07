import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {actionInitiateChat} from '../actions/index.js'

class ChatNow extends Component {

  render() {
    return (
      <Row>
        <Col md={2} />      
          <Col xs={4} md={8} style={{ padding: "0", marginBottom: "5px" }}>
          <Button
              bsStyle="primary"
              bsSize="large"
              style={{ padding: "0" }}
              block
              onClick={this.props.actionInitiateChat}
            >
              Chat Now
            </Button>
          </Col>
      </Row>
    );
  }
}

function mapStateToProps({signedInState}){
  return { signedInState };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({actionInitiateChat},dispatch);
} 
export default connect(
mapStateToProps,mapDispatchToProps
)(ChatNow); 