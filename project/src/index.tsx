import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/app/app';
import { AuthorizationStatus } from './const';
import { createApi } from './services/api';
import { rootReducer } from './store/reducers/root-reducer';
import { setAuthStatus } from './store/action-creators';

const api = createApi(() => (
  store.dispatch(setAuthStatus(AuthorizationStatus.NoAuth))
));

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk.withExtraArgument(api)],
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
