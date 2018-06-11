import React, { Component } from 'react';
import { Dropdown, DropdownButton, Glyphicon, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

export default class ChatHeader extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={12} style={{ padding: '20px' }}>

                    </Col>
                </Row>
                <Row>
                    <Col xs={2} md={2} style={{ padding: 0, verticalAlign: 'middle', paddingLeft: '35px' }}>
                        <Dropdown id="dropdown-custom-1" >
                            <Dropdown.Toggle noCaret style={{ border: 'none' }} bsSize='large'>
                                <Glyphicon glyph="glyphicon glyphicon-option-horizontal" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="super-colors">
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3" active>
                                    Active Item
                                </MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4">Separated link</MenuItem>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>

                    <Col xs={2} md={8} style={{ textAlign: 'center', fontStyle: 'bold', verticalAlign: 'middle' }}>
                        <h5> <strong> Chat with Us!</strong> </h5>
                    </Col>

                    <Col xs={2} md={2} style={{ padding: 0, verticalAlign: 'middle' }} >
                        <Dropdown id="dropdown-custom-1" >
                            <Dropdown.Toggle noCaret style={{ border: 'none' }} bsSize='large'>
                                <Glyphicon glyph="glyphicon glyphicon-chevron-down" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="super-colors">
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3" active>
                                    Active Item
                        </MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4">Separated link</MenuItem>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <hr style={{marginBottom:'0px'}}/>
                    </Col>
                </Row>
                
            </div>
        )
    }
}