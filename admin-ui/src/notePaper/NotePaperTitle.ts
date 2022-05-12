import { NotePaper as TNotePaper } from "../api/notePaper/NotePaper";

export const NOTEPAPER_TITLE_FIELD = "id";

export const NotePaperTitle = (record: TNotePaper): string => {
  return record.id || record.id;
};
