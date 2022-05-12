import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { NotePaperServiceBase } from "./base/notePaper.service.base";

@Injectable()
export class NotePaperService extends NotePaperServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
