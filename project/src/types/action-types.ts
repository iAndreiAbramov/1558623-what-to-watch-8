import { Action } from 'redux';
import { AxiosInstance } from 'axios';
import { RootStateTypes } from '../store/reducers/root-reducer';
import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, RootStateTypes, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<RootStateTypes, AxiosInstance, Action>;
