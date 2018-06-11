import React,{Component} from 'react';
import ChatHeader from './Chat_Header';
import {Grid} from 'react-bootstrap';
import ChatWindow from './chat_window';
import ChatNow from './chat_now';
import TypingBox from './typing_box';
import SignUp from './sign_up';

export default class ChatContainer extends Component{

    constructor(props){

        super(props);

        this.state = { 
                userMsg:'',
                status:false,
                userAllMsgs:[]
        }
    }

    msgCallback=(userMsg) => {

                    this.setState({
                        userAllMsgs: [...this.state.userAllMsgs, userMsg]
                    });

        console.log('user message',userMsg);  
            
    }

    signUpCallback=(status)=>{
                this.setState({
                        status:status
                })        
    }

    render(){

     var renderThis;

     if (this.state.status==false) {

       renderThis = <div className="chat-container">  
                        <Grid style={{width:'45%',paddingLeft:'0',paddingRight:'0'}} className='grid-class'>
                            <ChatHeader />
                            <ChatWindow chat={this.state.userAllMsgs}/>
                            <TypingBox userMsg={this.msgCallback}/>
                            <ChatNow signUpCall={this.signUpCallback}/>
                        </Grid>
                    </div>  
                    }
else{
    renderThis = <div className="chat-container">  
                    <Grid style={{width:'45%',paddingLeft:'0',paddingRight:'0'}} className='grid-class'>
                      <SignUp />
                    </Grid>
                </div>
    }   
        return( 
                        <div>
                            {renderThis}
                    </div>
            )
    }
}