import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  dislikes?: number | null;
  imageUrl?: string | null;
  likes?: number | null;
  topic?: string | null;
  userId?: string | null;
};
