import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PostWhereInput = {
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  dislikes?: IntNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  likes?: IntNullableFilter;
  topic?: StringNullableFilter;
  userId?: StringNullableFilter;
};
