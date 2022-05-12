import { User } from "../user/User";

export type ClassRoom = {
  createdAt: Date;
  id: string;
  name: string | null;
  syllabus: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
