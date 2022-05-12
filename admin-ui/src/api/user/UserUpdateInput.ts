import { CertificationUpdateManyWithoutUsersInput } from "./CertificationUpdateManyWithoutUsersInput";
import { NotePaperUpdateManyWithoutUsersInput } from "./NotePaperUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  certifications?: CertificationUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  notePapers?: NotePaperUpdateManyWithoutUsersInput;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
