import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  dislikes?: number | null;
  imageUrl?: string | null;
  likes?: number | null;
  topic?: string | null;
  userId?: string | null;
};
