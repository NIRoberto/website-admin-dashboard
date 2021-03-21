import { toast } from 'react-toastify';

import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
  LOGIN_FAILED,
} from './type';

const signupSuccess = message => ({
  type: SIGNUP_SUCCESS,
  payload: message,
});

const signFailed = error => ({
  type: SIGNUP_FAILED,
  payload: error,
});

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const loginFailed = error => ({
  type: LOGIN_FAILED,
  payload: error,
});
const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

const logoutFailed = () => ({
  type: LOGOUT_FAILED,
});

const logout = () => dispatch => {
  if (localStorage.token) {
    localStorage.removeItem('token');
    dispatch(logoutSuccess);
    toast.success('user logout successfully');
  } else {
    dispatch(logoutFailed);
    toast.Info('User already');
  }
};

export { signFailed, signupSuccess, loginSuccess, loginFailed, logout };
