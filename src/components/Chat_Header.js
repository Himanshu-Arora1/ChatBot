import React,{Component} from 'react';
import {DropdownButton} from 'react-bootstrap';
import {MenuItem } from 'react-bootstrap';

export default class ChatHeader extends Component {
    render(){
        return(
            <div className="chat-header">
                <DropdownButton title="...">
                    <MenuItem eventKey="1">Email Transcript</MenuItem>
                    <MenuItem eventKey="2">Mute</MenuItem>
                </DropdownButton>
                <h5> Chat with Us! </h5>
            </div>
        )
    }
}