import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CourseWhereInput = {
  description?: StringNullableFilter;
  enrolledUsers?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
