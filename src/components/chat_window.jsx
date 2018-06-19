import React,{Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap';

import ChatItem from './Chat_Item';

export default class ChatWindow extends Component{

    render(){

        return(
            
                <Grid style={{backgroundColor:'#d9edf75c',width:'100%'}}>
                     <ChatItem chat={this.props.chat} />
                </Grid>
            
        )
    }
}



    
