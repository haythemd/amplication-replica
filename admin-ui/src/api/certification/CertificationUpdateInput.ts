import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CertificationUpdateInput = {
  link?: string;
  user?: UserWhereUniqueInput;
};
