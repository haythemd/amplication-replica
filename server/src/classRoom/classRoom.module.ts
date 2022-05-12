import { Module } from "@nestjs/common";
import { ClassRoomModuleBase } from "./base/classRoom.module.base";
import { ClassRoomService } from "./classRoom.service";
import { ClassRoomController } from "./classRoom.controller";
import { ClassRoomResolver } from "./classRoom.resolver";

@Module({
  imports: [ClassRoomModuleBase],
  controllers: [ClassRoomController],
  providers: [ClassRoomService, ClassRoomResolver],
  exports: [ClassRoomService],
})
export class ClassRoomModule {}
