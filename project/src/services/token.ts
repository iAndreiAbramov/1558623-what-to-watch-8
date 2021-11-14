const TOKEN_KEY = 'wtw-token';

export const setToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = (): string | null => (
  localStorage.getItem(TOKEN_KEY) || null
);

export const dropToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};
