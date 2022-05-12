import { User } from "../user/User";

export type Certification = {
  createdAt: Date;
  id: string;
  link: string;
  updatedAt: Date;
  user?: User;
};
