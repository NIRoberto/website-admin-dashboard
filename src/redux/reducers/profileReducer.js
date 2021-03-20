import {
  PROFILE_FAILED,
  PROFILE_SUCCESS,
  PROFILE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAILED,
} from "../action/type";
const initialState = {
  userData: null,
  error: null,
  Data: null,
  errorMsg: null,
};

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PROFILE_REQUEST:
      return {
        ...state,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        userData: payload,
      };
    case PROFILE_FAILED:
      return {
        ...state,
        error: payload,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        Data: payload,
      };
    case UPDATE_FAILED:
      return {
        ...state,
        errorMsg: payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
