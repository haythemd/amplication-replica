import { CertificationUpdateManyWithoutUsersInput } from "./CertificationUpdateManyWithoutUsersInput";
import { ClassRoomWhereUniqueInput } from "../classRoom/ClassRoomWhereUniqueInput";
import { NotePaperUpdateManyWithoutUsersInput } from "./NotePaperUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  certifications?: CertificationUpdateManyWithoutUsersInput;
  classRoom?: ClassRoomWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  notePapers?: NotePaperUpdateManyWithoutUsersInput;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
