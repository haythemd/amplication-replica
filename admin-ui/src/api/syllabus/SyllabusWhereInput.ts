import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SyllabusWhereInput = {
  desc?: StringNullableFilter;
  id?: StringFilter;
  teacher?: StringNullableFilter;
  title?: StringNullableFilter;
};
