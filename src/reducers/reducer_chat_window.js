import {SEND_MSG} from '../actions';

export default function(state=[],action){
    
    switch (action.type) {    
        case SEND_MSG :{
            console.log('switch',action.payload.userMsg1);
            console.log('state',state);
            //return [action.payload.userAllMsgs,...state];
            return state.concat(action.payload.userMsg); 
        }
         default:{
             console.log('defa',state);
          return state;
         }
} }