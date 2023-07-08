import {
  LOGIN,
  LOGOUT,
  ADD_MESSAGE,
  DELETE_MESSAGE,
  RECEIVE_MESSAGES,
  CLEAR_ERROR,
  Message,
  REGISTER,
  User,
  RegisterAction,
} from "./types";

export const register = (user: User): RegisterAction => ({
  type: REGISTER,
  payload: user,
});

export const login = (username: string, password: string) => ({
  type: LOGIN as typeof LOGIN,
  payload: {
    username,
    password,
  },
});

export const logout = () => ({
  type: LOGOUT as typeof LOGOUT,
});

export const addMessage = (message: Message) => ({
  type: ADD_MESSAGE as typeof ADD_MESSAGE,
  payload: message,
});

export const deleteMessage = (messageId: string) => ({
  type: DELETE_MESSAGE as typeof DELETE_MESSAGE,
  payload: messageId,
});

export const receiveMessages = (messages: Message[]) => ({
  type: RECEIVE_MESSAGES as typeof RECEIVE_MESSAGES,
  payload: messages,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});
