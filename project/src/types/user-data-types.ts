export type UserDataTypesBack = {
  id: string,
  email: string,
  name: string,
  ['avatar_url']: string,
  token: string,
};

export type UserDataTypesFront = {
  id: string,
  email: string,
  name: string,
  avatarUrl: string,
  token: string,
};

export type UserAuthorizationTypes = {
  email: string,
  password: string,
};
