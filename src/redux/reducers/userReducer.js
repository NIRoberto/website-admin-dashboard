import userInitialState from "./initialState";
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SIGNUP_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from "../action/type";

const userReducer = (state = userInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        userSignupData: payload,
        isLogged: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLogged: true,
        message: payload.message,
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        signupError: payload.error,
        isLogged: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        errorR: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLogged: false,
        errorL: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: true,
        errorR: null,
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        isLogged: false,
        errorL: null,
      };
    default:
      return state;
  }
};

export default userReducer;
