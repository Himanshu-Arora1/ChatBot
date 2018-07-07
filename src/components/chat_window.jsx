import React,{Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

import ChatItem from './chat_item';

export default class ChatWindow extends Component{

    render(){
        console.log('chat window',this.props.userAllMsgs);
        return(            
                <Grid style={{backgroundColor:'#d9edf75c',width:'100%'}}>
                     <ChatItem  chat={this.props.userAllMsgs}/>
                </Grid>            
        )
    }
}



    
