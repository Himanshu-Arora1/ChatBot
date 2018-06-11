import React,{Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import ChatItem from './Chat_Item';
import ScrollArea from 'react-scrollbar';

export default class ChatWindow extends Component{

    render(){

        console.log(this.props.chat);
        return(
            <ScrollArea>
                <Grid style={{backgroundColor:'#d9edf75c',width:'100%'}}>
                     <ChatItem chat={this.props.chat} />
                </Grid>
            </ScrollArea>
        )
    }
}



    
