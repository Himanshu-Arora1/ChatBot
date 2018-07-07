import { combineReducers } from 'redux';
import signedIn from './reducer_signedIn';
import chatWindow from './reducer_chat_window';

const rootReducer = combineReducers({
      signedInState:signedIn,
      userAllMsgs:chatWindow
});

export default rootReducer;