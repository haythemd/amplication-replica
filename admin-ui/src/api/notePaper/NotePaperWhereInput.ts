import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotePaperWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
