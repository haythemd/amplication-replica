import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ClassRoomWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  syllabus?: StringNullableFilter;
  users?: UserListRelationFilter;
};
