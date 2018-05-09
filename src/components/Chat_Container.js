import React,{Component} from 'react';
import ChatHeader from './Chat_Header';

export default class ChatContainer extends Component{
    render(){
        return( <div className="main-div">  
                    <ChatHeader />
                </div>
            )
    }

}