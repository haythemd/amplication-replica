import { Comment } from "../comment/Comment";

export type Post = {
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  dislikes: number | null;
  id: string;
  likes: number | null;
  topic: string | null;
  updatedAt: Date;
  userId: string | null;
};
