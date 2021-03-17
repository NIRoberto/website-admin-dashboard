import { toast } from "react-toastify";

const {
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} = require("./type");

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

const logout = () => {
  if (localStorage.token) {
    localStorage.removeItem("token");
    toast.success("user logout successfully");
  } else {
    console.log("error");
  }
};

export { signFailed, signupSuccess, loginSuccess, loginFailed, logout };
