import { ClassRoom as TClassRoom } from "../api/classRoom/ClassRoom";

export const CLASSROOM_TITLE_FIELD = "name";

export const ClassRoomTitle = (record: TClassRoom): string => {
  return record.name || record.id;
};
