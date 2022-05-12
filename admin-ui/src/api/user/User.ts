import { Certification } from "../certification/Certification";
import { ClassRoom } from "../classRoom/ClassRoom";
import { NotePaper } from "../notePaper/NotePaper";

export type User = {
  certifications?: Array<Certification>;
  classRoom?: ClassRoom | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  notePapers?: Array<NotePaper>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
