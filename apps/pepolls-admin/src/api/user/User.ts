import { JsonValue } from "type-fest";

export type User = {
  birthdate: Date | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  image: string | null;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
