import React, { Component } from 'react';
import { Dropdown, DropdownButton, Glyphicon,Button,OverlayTrigger, Tooltip } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';


export default class ChatHeader extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={12} style={{padding:'20px'}}>

                    </Col>
                </Row>
                <Row>
                    <Col xs={2} md={2} id='header-row2-col1' >
                        <Dropdown id="dropdown-custom-1" >
                            <Dropdown.Toggle noCaret style={{ border:'none' }} bsSize='large'>
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

                    <Col xs={8} md={8} id='header-row2-col2'>
                        <h5> <strong> Chat with Us!</strong> </h5>
                    </Col>

                    <Col xs={2} md={2} id='header-row2-col3'>
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
                            <hr  />
                        </Col>
                    </Row>

                    <Row>
                    <Col md={8} id='header-row3-col1'  >
                        <img src="../../style/1.jpg" className='support-image' />
                        <h5 >
                            <strong> Himanshu </strong>
                        </h5>
                        <br/><br/>
                        <h5 style={{ margin: '0px' }}>Support Hero</h5>
                    </Col>
                    
                    <Col md={2} id='header-row3-col2' >
                        <OverlayTrigger
                            overlay={<Tooltip id='badId'>RateGood</Tooltip>}
                            placement="top"
                            delayShow={300}
                            delayHide={150}
                        >
                            <Button bsSize='small'>
                                <Glyphicon glyph="glyphicon glyphicon-thumbs-up" />
                            </Button>
                        </OverlayTrigger>
                    </Col>

                    <Col md={2} id='header-row3-col3' style={{ padding: 0 }}>
                        <OverlayTrigger
                            overlay={<Tooltip id='badId'>Ratebad</Tooltip>}
                            placement="top"
                            delayShow={300}
                            delayHide={150}
                        >
                            <Button bsSize='small' style={{ border: 'none', borderRadius: '50%' }}>
                                <Glyphicon glyph="glyphicon glyphicon-thumbs-down" />
                            </Button>
                        </OverlayTrigger>
                    </Col>
                </Row>
        </div>
        )
    }
}