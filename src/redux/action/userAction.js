import { toast } from "react-toastify";

import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
  LOGIN_FAILED,
} from "./type";

const signupSuccess = (message) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: message,
  };
};

const signFailed = (error) => {
  return {
    type: SIGNUP_FAILED,
    payload: error,
  };
};

const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: error,
  };
};
const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

const logoutFailed = () => {
  return {
    type: LOGOUT_FAILED,
  };
};

const logout = () => {
  return (dispatch) => {
    if (localStorage.token) {
      localStorage.removeItem("token");
      dispatch(logoutSuccess);
      toast.success("user logout successfully");
    } else {
      dispatch(logoutFailed);
      console.log("error");
    }
  };
};

export { signFailed, signupSuccess, loginSuccess, loginFailed, logout };
