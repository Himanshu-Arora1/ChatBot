import { GET_SIGNEDIN_STATE } from "../actions";

export default function(state = true, action) {
  switch (action.type) {
    case GET_SIGNEDIN_STATE:
      return action.payload;
    default:
      return state;
  }
}
