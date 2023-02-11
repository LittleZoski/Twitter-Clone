export type Husq = {
  id?: number;
  createdAt: string;
  deleted: boolean;
  authorId: number;
  text: string;
  replyId?: number;
  count: Count;
};

type Count = {
  likes: number;
  replies: number;
};
