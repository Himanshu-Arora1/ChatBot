import React,{Component} from 'react';
import ChatHeader from './Chat_Header';
import ChatSupport from './Chat_Support'

export default class ChatContainer extends Component{
    render(){
        return( <div className="main-div">  
                    <ChatHeader />
                    <ChatSupport />
                </div>
            )
    }

}