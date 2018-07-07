//Actions are payload of information

export const GET_SIGNEDIN_STATE = "get_signedin_state";
export const SEND_MSG = 'send_msg';

export function actionInitiateChat(){
    return {
        type: GET_SIGNEDIN_STATE,
        payload: false 
      };
}

export function actionSendMsg(userMsg){
    console.log('action',userMsg);
    const userMsg1 = userMsg;
    return {
        type: SEND_MSG,
        payload: 'userMsg1'
      };
}






