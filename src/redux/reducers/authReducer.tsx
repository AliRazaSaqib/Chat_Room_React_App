import { CLEAR_ERROR, LOGIN, LOGOUT, REGISTER, User } from "../actions/types";

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  error: string | null;
}

type AuthAction =
  | { type: typeof LOGIN; payload: { username: string; password: string } }
  | { type: typeof LOGOUT }
  | { type: typeof REGISTER; payload: User }
  | { type: typeof CLEAR_ERROR };

const initialAuthState: AuthState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

const authReducer = (
  state: AuthState = initialAuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case LOGIN:
      const { username, password } = state.user || {
        username: "",
        password: "",
      };

      if (
        username === action.payload.username &&
        password === action.payload.password
      ) {
        return {
          ...state,
          isLoggedIn: true,
          error: null,
        };
      } else {
        return {
          ...state,
          isLoggedIn: false,
          error: "Invalid username or password.",
        };
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER:
      const { email } = state.user || { email: "" };

      if (email === action.payload.email) {
        return {
          ...state,
          error: "Email already exists. Please enter a different email.",
        };
      } else {
        return {
          ...state,
          user: action.payload,
          error: null,
        };
      }
    default:
      return state;
  }
};

export default authReducer;
