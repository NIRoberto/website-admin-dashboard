import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import profileReducer from "redux/reducers/profileReducer";
import logger from "redux-logger";
import userReducer from "redux/reducers/userReducer";
import setAuthorizationToken from "utils/setAuth";

const rootReduces = combineReducers({
  auth: userReducer,
  profile: profileReducer,
});

setAuthorizationToken(localStorage.token);

const store = createStore(
  rootReduces,

  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
