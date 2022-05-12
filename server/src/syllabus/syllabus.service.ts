import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SyllabusServiceBase } from "./base/syllabus.service.base";

@Injectable()
export class SyllabusService extends SyllabusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
