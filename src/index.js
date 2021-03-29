import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store/store';
import Loader from 'skeletons/Loader/Loader';
import './styles/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
