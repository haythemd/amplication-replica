import { NotePaperWhereInput } from "./NotePaperWhereInput";
import { NotePaperOrderByInput } from "./NotePaperOrderByInput";

export type NotePaperFindManyArgs = {
  where?: NotePaperWhereInput;
  orderBy?: Array<NotePaperOrderByInput>;
  skip?: number;
  take?: number;
};
