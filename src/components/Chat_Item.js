import React,{Component} from 'react';
import {Row,Col,Panel} from 'react-bootstrap';

export default class ChatItem extends Component{

    callFunction(messages){
        console.log('messge');
        console.log('messages',messages);
       return( <Panel style={{borderRadius:'15px'}}>
             <Panel.Body>
         {messages}
        </Panel.Body>
                    </Panel>
       )
    }


    render(){
        
       return(
           <Row style={{margin:'0'}} >
                <Col md={12}>
                     <img src="../../style/1.jpg"  style={{width:'20px',borderRadius:'50%',float:'left'}} />
                     <p style={{marginTop:'7px',marginLeft:'30px',fontSize:'13px'}}>Himanshu Arora</p>
                </Col>
                    
                <Col md={8} style={{float:'left'}}>
                    
                       
                        {this.props.chat.map(messages=>this.callFunction(messages))}
                        
                </Col>
           </Row>
       )
    }
}






