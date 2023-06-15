import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "content";

export const PostTitle = (record: TPost): string => {
  return record.content || String(record.id);
};
