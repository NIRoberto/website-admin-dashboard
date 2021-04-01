import axios from 'axios';
import { SINGLE_REQUEST, SINGLE_SUCCESS, SINGLE_FAILED } from './type';

const getSingleRequest = () => ({
  type: SINGLE_REQUEST,
});

const getSingleSuccess = user => ({
  type: SINGLE_SUCCESS,
  payload: user,
});

const getSingleFailed = error => ({
  type: SINGLE_FAILED,
  payload: error,
});

const getSingleActionCreator = () => dispatch => {
  const source = axios.CancelToken.source();
  const config = { cancelToken: source.token };
  dispatch(getSingleRequest);

  axios
    .get(`https://dashboard-r-api.herokuapp.com/api/v1/users/user/`, config)
    .then(res => {
      const data1 = res.data.data.user;
      dispatch(getSingleSuccess(data1));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(getSingleFailed(errorMsg));
    });
};

export {
  getSingleFailed,
  getSingleSuccess,
  getSingleRequest,
  getSingleActionCreator,
};
