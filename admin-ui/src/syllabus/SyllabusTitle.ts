import { Syllabus as TSyllabus } from "../api/syllabus/Syllabus";

export const SYLLABUS_TITLE_FIELD = "title";

export const SyllabusTitle = (record: TSyllabus): string => {
  return record.title || record.id;
};
