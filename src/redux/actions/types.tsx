export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const REGISTER = "REGISTER";
export const CLEAR_ERROR = "CLEAR_ERROR";

export interface Message {
  id: string;
  username: string;
  text: string;
  timestamp: number;
}

export interface User {
  username: string;
  email: string;
  password: string;
}

export interface RegisterAction {
  type: typeof REGISTER;
  payload: User;
}
