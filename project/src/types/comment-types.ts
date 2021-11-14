export type CommentTypes = {
  id: string,
  user: {
    id: string,
    name: string,
  },
  rating: number,
  comment: string,
  date: string,
};

export type CommentPostTypes = {
  rating: number,
  comment: string,
};
