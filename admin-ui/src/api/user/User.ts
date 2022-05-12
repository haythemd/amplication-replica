import { Certification } from "../certification/Certification";
import { NotePaper } from "../notePaper/NotePaper";

export type User = {
  certifications?: Array<Certification>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  notePapers?: Array<NotePaper>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
