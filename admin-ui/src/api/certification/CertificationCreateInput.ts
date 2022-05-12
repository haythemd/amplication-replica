import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CertificationCreateInput = {
  link: string;
  user: UserWhereUniqueInput;
};
