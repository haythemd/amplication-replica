import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  birthdate?: Date | null;
  email?: string | null;
  firstName?: string | null;
  image?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
