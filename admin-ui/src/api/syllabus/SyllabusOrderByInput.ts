import { SortOrder } from "../../util/SortOrder";

export type SyllabusOrderByInput = {
  createdAt?: SortOrder;
  desc?: SortOrder;
  id?: SortOrder;
  teacher?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
