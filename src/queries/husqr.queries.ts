import { API } from "@/api/api";

export interface husqr {
  id: number;
  createdAt: string;
  deleted: false;
  authorId: number;
  text: string;
  replyId: null;
  _count: {
    likes: number;
    replies: number;
  };
}
