/* eslint-disable import/no-extraneous-dependencies */
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import profileReducer from 'redux/reducers/profileReducer';
// import logger from 'redux-logger';
import userReducer from 'redux/reducers/userReducer';
import setAuthorizationToken from 'utils/setAuth';
import authProfileReducer from 'redux/reducers/authProfileReducer';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const rootReducer = combineReducers({
  auth: userReducer,
  profile: profileReducer,
  authProfile: authProfileReducer,
});
const persistConfig = {
  key: 'app',
  storage,
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

setAuthorizationToken(localStorage.token);
const composeEnhancers = composeWithDevTools || compose;

const store = createStore(
  persistedReducer,

  composeEnhancers(applyMiddleware(thunk)),
);
const persistor = persistStore(store);

export { store, persistor };
