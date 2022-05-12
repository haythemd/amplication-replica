import { Certification as TCertification } from "../api/certification/Certification";

export const CERTIFICATION_TITLE_FIELD = "link";

export const CertificationTitle = (record: TCertification): string => {
  return record.link || record.id;
};
