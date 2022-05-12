import { CertificationCreateNestedManyWithoutUsersInput } from "./CertificationCreateNestedManyWithoutUsersInput";
import { ClassRoomWhereUniqueInput } from "../classRoom/ClassRoomWhereUniqueInput";
import { NotePaperCreateNestedManyWithoutUsersInput } from "./NotePaperCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  certifications?: CertificationCreateNestedManyWithoutUsersInput;
  classRoom?: ClassRoomWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  notePapers?: NotePaperCreateNestedManyWithoutUsersInput;
  password: string;
  roles: Array<string>;
  username: string;
};
