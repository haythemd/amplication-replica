import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CertificationWhereInput = {
  id?: StringFilter;
  link?: StringFilter;
  user?: UserWhereUniqueInput;
};
