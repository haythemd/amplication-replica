import { ClassRoomWhereInput } from "./ClassRoomWhereInput";
import { ClassRoomOrderByInput } from "./ClassRoomOrderByInput";

export type ClassRoomFindManyArgs = {
  where?: ClassRoomWhereInput;
  orderBy?: Array<ClassRoomOrderByInput>;
  skip?: number;
  take?: number;
};
