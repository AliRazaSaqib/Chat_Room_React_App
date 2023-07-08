import { LOGIN, LOGOUT, REGISTER, User } from "../actions/types";

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  error: string | null;
}

type AuthAction =
  | { type: typeof LOGIN; payload: { username: string; password: string } }
  | { type: typeof LOGOUT }
  | { type: typeof REGISTER; payload: User };

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
      // Get the username and password from the Redux store
      const { username, password } = state.user || {
        username: "",
        password: "",
      };

      // Check if the entered username and password match
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
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
