import { UserCreateNestedManyWithoutClassRoomsInput } from "./UserCreateNestedManyWithoutClassRoomsInput";

export type ClassRoomCreateInput = {
  name?: string | null;
  syllabus?: string | null;
  users?: UserCreateNestedManyWithoutClassRoomsInput;
};
