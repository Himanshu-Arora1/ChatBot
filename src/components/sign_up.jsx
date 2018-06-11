import React,{Component} from 'react';
import ChatHeader from'./Chatnowcomponents/Chat_Header'
import SignUpForm from './Chatnowcomponents/sign_up_form'

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