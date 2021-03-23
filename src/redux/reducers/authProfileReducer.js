import { SINGLE_REQUEST, SINGLE_SUCCESS, SINGLE_FAILED } from '../action/type';

const initialState = {
  user: null,
  error: null,
};

const authProfileReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SINGLE_REQUEST:
      return {
        ...state,
      };
    case SINGLE_SUCCESS:
      return {
        ...state,
        user: payload,
      };
    case SINGLE_FAILED:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

export default authProfileReducer;
