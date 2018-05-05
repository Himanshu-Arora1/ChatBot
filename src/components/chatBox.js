import React,{Component} from 'react';
import {OverlayTrigger} from 'react-bootstrap';
import {Tooltip} from 'react-bootstrap';
import {DropdownButton,MenuItem } from 'react-bootstrap';

const tooltip = (
    <Tooltip id="tooltip">
      <strong>options</strong> 
    </Tooltip>
  );

export default class ChatBox extends Component{
   

     render(){
         return(
             <div className="firstHeader">
                <div className='overLay'>
                    <OverlayTrigger placement="left" overlay={tooltip}>
                        <DropdownButton title="...">
                            <MenuItem eventKey="1">send Transcript</MenuItem>
                            <MenuItem eventKey="2">Mute</MenuItem>
                    </DropdownButton>
                    </OverlayTrigger>
                </div>
                <div style={{textAlign:"center",marginBottom:"10px"}}>
                        Chat With us!
                </div>
                 <hr />
             </div>
         )
     }
}