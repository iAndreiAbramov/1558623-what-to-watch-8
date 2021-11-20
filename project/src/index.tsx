import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import App from './components/app/app';
import { AuthorizationStatus } from './const';
import { checkAuthStatusAction, getFilmsAction, getPromoAction } from './store/api-actions';
import { createApi } from './services/api';
import { rootReducer } from './store/reducers/root-reducer';
import { setAuthStatusAction } from './store/action-creators';
import { ThunkAppDispatch } from './types/action-types';

export const api = createApi(() => (
  store.dispatch(setAuthStatusAction(AuthorizationStatus.NoAuth))
));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    },
  }),
});

(store.dispatch as ThunkAppDispatch)(checkAuthStatusAction());
(store.dispatch as ThunkAppDispatch)(getFilmsAction());
(store.dispatch as ThunkAppDispatch)(getPromoAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
