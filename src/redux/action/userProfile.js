import axios from 'axios';
import {
  PROFILE_FAILED,
  PROFILE_SUCCESS,
  PROFILE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAILED,
} from './type';

const getProfileRequest = () => ({
  type: PROFILE_REQUEST,
});

const getProfileSuccess = user => ({
  type: PROFILE_SUCCESS,
  payload: user,
});

const getProfileFailed = error => ({
  type: PROFILE_FAILED,
  payload: error,
});
const updateSuccess = user => ({
  type: UPDATE_SUCCESS,
  payload: user,
});

const updateFailed = error => ({
  type: UPDATE_FAILED,
  payload: error,
});
const profileActionCreator = () => dispatch => {
  dispatch(getProfileRequest);
  axios
    .get('https://dashboard-r-api.herokuapp.com/api/v1/users/')
    .then(data => {
      const userData = data.data.data.users;
      dispatch(getProfileSuccess(userData));
    })
    .catch(error => {
      dispatch(getProfileFailed(error));
    });
};

export {
  profileActionCreator,
  getProfileFailed,
  getProfileSuccess,
  getProfileRequest,
  updateSuccess,
  updateFailed,
};
