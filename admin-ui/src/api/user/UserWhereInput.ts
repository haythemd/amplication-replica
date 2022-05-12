import { CertificationListRelationFilter } from "../certification/CertificationListRelationFilter";
import { ClassRoomWhereUniqueInput } from "../classRoom/ClassRoomWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotePaperListRelationFilter } from "../notePaper/NotePaperListRelationFilter";

export type UserWhereInput = {
  certifications?: CertificationListRelationFilter;
  classRoom?: ClassRoomWhereUniqueInput;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  notePapers?: NotePaperListRelationFilter;
  username?: StringFilter;
};
