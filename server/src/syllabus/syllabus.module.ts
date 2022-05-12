import { Module } from "@nestjs/common";
import { SyllabusModuleBase } from "./base/syllabus.module.base";
import { SyllabusService } from "./syllabus.service";
import { SyllabusController } from "./syllabus.controller";
import { SyllabusResolver } from "./syllabus.resolver";

@Module({
  imports: [SyllabusModuleBase],
  controllers: [SyllabusController],
  providers: [SyllabusService, SyllabusResolver],
  exports: [SyllabusService],
})
export class SyllabusModule {}
