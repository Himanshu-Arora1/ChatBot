import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class ChatNow extends Component {


    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            value:'true'
        };

    }

    handleSubmit(event) {

        event.preventDefault();

        console.log('enter onsubmit:', this.state.value);

        this.props.signUpCall(this.state.value);

    }

    render() {
        console.log('enter render of chat now');
        return (
            <Row>
                <Col md={2}>
                </Col>
                <form onSubmit={this.handleSubmit}>
                    <Col xs={4} md={8} style={{ padding: '0', marginBottom: '5px' }}>
                        <Button type="submit" bsStyle="primary" bsSize="large" style={{ padding: '0' }} block>
                            Chat Now
                        </Button>
                    </Col>
                </form>
            </Row>
        )
    }
}