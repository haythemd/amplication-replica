import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CertificationServiceBase } from "./base/certification.service.base";

@Injectable()
export class CertificationService extends CertificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
