import { SyllabusWhereInput } from "./SyllabusWhereInput";
import { SyllabusOrderByInput } from "./SyllabusOrderByInput";

export type SyllabusFindManyArgs = {
  where?: SyllabusWhereInput;
  orderBy?: Array<SyllabusOrderByInput>;
  skip?: number;
  take?: number;
};
