import React,{Component} from 'react';

import ChatHeader from'../chat_header'
import SignUpForm from './sign_up_form'

export default class SignUp extends Component{
    render(){
        return(
            <div>
                <ChatHeader />
                <SignUpForm />
            </div>
        )
    }
}