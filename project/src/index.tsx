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
import { setAuthStatus, setFilmsDataAction } from './store/action-creators';
import { ThunkAppDispatch } from './types/action-types';
import { getFilmsAction } from './store/api-actions';

export const api = createApi(() => (
  store.dispatch(setAuthStatus(AuthorizationStatus.NoAuth))
));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware ({
    thunk: {
      extraArgument: api,
    },
  }),
});

// (store.dispatch as ThunkAppDispatch)(getFilms());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
