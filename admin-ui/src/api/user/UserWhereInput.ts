import { CertificationListRelationFilter } from "../certification/CertificationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotePaperListRelationFilter } from "../notePaper/NotePaperListRelationFilter";

export type UserWhereInput = {
  certifications?: CertificationListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  notePapers?: NotePaperListRelationFilter;
  username?: StringFilter;
};
