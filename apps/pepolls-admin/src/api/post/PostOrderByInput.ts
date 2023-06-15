import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  dislikes?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  likes?: SortOrder;
  topic?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
