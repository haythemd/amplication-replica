import { CertificationCreateNestedManyWithoutUsersInput } from "./CertificationCreateNestedManyWithoutUsersInput";
import { NotePaperCreateNestedManyWithoutUsersInput } from "./NotePaperCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  certifications?: CertificationCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  notePapers?: NotePaperCreateNestedManyWithoutUsersInput;
  password: string;
  roles: Array<string>;
  username: string;
};
