import { User } from "../user/User";

export type NotePaper = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User;
};
