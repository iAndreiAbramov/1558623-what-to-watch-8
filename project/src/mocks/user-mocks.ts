import { UserDataTypesBack, UserDataTypesFront } from '../types/user-data-types';

export const userFrontMock: UserDataTypesFront = {
  id: '1',
  email: 'email-1',
  name: 'name-1',
  avatarUrl: 'avatar-url',
};

export const userBackMock: UserDataTypesBack = {
  id: '1',
  email: 'email-1',
  name: 'name-1',
  ['avatar_url']: 'avatar-url',
  token: 'token',
};
