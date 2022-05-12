import { UserUpdateManyWithoutClassRoomsInput } from "./UserUpdateManyWithoutClassRoomsInput";

export type ClassRoomUpdateInput = {
  name?: string | null;
  syllabus?: string | null;
  users?: UserUpdateManyWithoutClassRoomsInput;
};
