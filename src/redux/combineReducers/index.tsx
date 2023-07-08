import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import chatReducer from "../reducers/chatReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
});

export default rootReducer;
