export type Husq = {
  id: number;
  createdAt: string;
  deleted: boolean;
  authorId: number;
  text: string;
  replyId?: number;
  _count: Count;
  liked: boolean;
};

type Count = {
  likes: number;
  replies: number;
};
