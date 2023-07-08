import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  RECEIVE_MESSAGES,
  Message,
} from "../actions/types";

interface ChatState {
  messages: Message[];
}

const initialChatState: ChatState = {
  messages: [],
};

interface Action {
  type: string;
  payload?: any;
}
const chatReducer = (
  state: ChatState = initialChatState,
  action: Action
): ChatState => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload
        ),
      };
    case RECEIVE_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
