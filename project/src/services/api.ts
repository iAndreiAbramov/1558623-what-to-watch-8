import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from './token';
import { HttpResponseStatus } from '../const';

const BASE_URL = 'https://8.react.pages.academy/wtw';
const TIMEOUT = 5000;

export const createApi = (onUnauthorized: () => void): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });

  api.interceptors.request.use(
    (request: AxiosRequestConfig) => {
      const token = getToken();
      if (token) {
        request.headers['X-Token'] = token;
      }
      return request;
    },
  );

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if (error.response?.status === HttpResponseStatus.UnAuthorized) {
        onUnauthorized();
      }

      return Promise.reject(error);
    },
  );

  return api;
};
