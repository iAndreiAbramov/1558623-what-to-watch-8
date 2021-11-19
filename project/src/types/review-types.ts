export type ReviewTypes = {
  id: string,
  user: {
    id: string,
    name: string,
  },
  rating: number,
  comment: string,
  date: string,
};

export type ReviewPostTypes = {
  id: string,
  rating: number,
  comment: string,
};
