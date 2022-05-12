import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ClassRoomServiceBase } from "./base/classRoom.service.base";

@Injectable()
export class ClassRoomService extends ClassRoomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
