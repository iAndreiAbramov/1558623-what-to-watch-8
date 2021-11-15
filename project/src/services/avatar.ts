const AVATAR_KEY = 'wtw-avatar';

export const setAvatar = (avatar: string): void => {
  localStorage.setItem(AVATAR_KEY, avatar);
};

export const getAvatar = (): string | null => (
  localStorage.getItem(AVATAR_KEY) || null
);

export const dropAvatar = (): void => {
  localStorage.removeItem(AVATAR_KEY);
};
